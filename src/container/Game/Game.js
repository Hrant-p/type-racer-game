import React, { useEffect, useState } from 'react';
import './Game.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import {
  clearRandomText,
  getLastWpmResult,
  getRandomTextRequest,
  putLastWpmResultRequest
} from '../../store/actions/textActionCreators';
import {
  lastResultSelector,
  randomTextSelector,
  textErrorSelector,
  textLoadingSelector
} from '../../store/selectors/textSelector';
import Spinner from '../../components/Spinner/Spinner';
import { currentUserSelector } from '../../store/selectors/userSelector';
import { calculateWPM } from '../../API/helpers';
import Timer from '../Timer/Timer';
import BeforeStartTimer from '../../components/BeforeStartTimer/BeforeStartTimer';

const Game = ({
  user,
  randomText,
  lastResult,
  textLoading,
  textError,
  getRandomTextActionCreator,
  clearRandomTextCreator,
  getLastWpmResultActionCreator,
  putLastWpmResultRequestActionCreator
}) => {
  const txt = 'lorem ipsum dolor sit amet'; // fake string for Testing
  const regex = /\w+/gm;
  const [alreadyTypedText, setAlreadyTypedText] = useState('');
  const count = txt ? txt.match(regex).length : null;
  const secondsInterval = 20;
  const [delay, setDelay] = useState(null);
  const [color, setColor] = useState(true);
  const [text, setText] = useState('');
  const [showGameContent, setShowGameContent] = useState(false);
  const [wpmResult, setWpmResult] = useState(null);

  const checkIsPenultimate = (value, length) => {
    if (!value.includes(' ') && color && (length + value.length === txt.length)) {
      setAlreadyTypedText(alreadyTypedText.concat(value));
      setText('You Are Successfully Finished !');
    }
  };

  const handleChange = ({ currentTarget: { value } }) => {
    setText(value);

    for (let i = 0; i < value.length; i++) {
      if (value[i] === txt[alreadyTypedText.length + i]) {
        setColor(true);
        checkIsPenultimate(value, alreadyTypedText.length);
      } else {
        setColor(false);
      }
    }

    if (value.includes(' ') && color) {
      setAlreadyTypedText(alreadyTypedText.concat(value));
      setText('');
    }
  };

  const startGame = () => {
    getRandomTextActionCreator();
    let id;
    if (id) {
      clearTimeout(id);
    }
    setDelay(null);
    setShowGameContent(true);
    id = setTimeout(() => setDelay(1000), 5000);
  };

  useEffect(() => {
    if (txt === alreadyTypedText) {
      const result = calculateWPM(secondsInterval, count);
      setWpmResult(result);
      putLastWpmResultRequestActionCreator(result, user.get('nickname'));
    }
  }, [
    text,
    wpmResult,
    txt,
    count,
    delay,
    putLastWpmResultRequestActionCreator
  ]);

  return (
    <div className="game">
      Type Racer Game
      {textLoading && <Spinner />}
      <button type="button" onClick={startGame}>
        Start New Game
      </button>
      {showGameContent && (
        <>
          <div className="time-area">
            {delay ? (
              <Timer secondsInterval={secondsInterval} delay={delay} />
            ) : (
              <BeforeStartTimer />
            )}
          </div>
          <p>{randomText}</p>
          <hr />
          <input
            className="type-field"
            style={{ backgroundColor: color ? 'lightgreen' : 'lightpink' }}
            type="text"
            value={text}
            onChange={handleChange}
            disabled={!delay}
          />
        </>
      )}
    </div>
  );
};

Game.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
  randomText: PropTypes.string,
  lastResult: PropTypes.number,
  textLoading: PropTypes.bool.isRequired,
  textError: PropTypes.string,
  getRandomTextActionCreator: PropTypes.func.isRequired,
  clearRandomTextCreator: PropTypes.func.isRequired,
  getLastWpmResultActionCreator: PropTypes.func.isRequired,
  putLastWpmResultRequestActionCreator: PropTypes.func.isRequired
};

Game.defaultProps = {
  randomText: null,
  lastResult: null,
  textError: null
};

const mapStateToProps = state => ({
  randomText: randomTextSelector(state),
  lastResult: lastResultSelector(state),
  user: currentUserSelector(state),
  textLoading: textLoadingSelector(state),
  textError: textErrorSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getRandomTextActionCreator: getRandomTextRequest,
    clearRandomTextCreator: clearRandomText,
    getLastWpmResultActionCreator: getLastWpmResult,
    putLastWpmResultRequestActionCreator: putLastWpmResultRequest
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
