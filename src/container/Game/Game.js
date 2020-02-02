import React, { useEffect, useRef, useState } from 'react';
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
import { calculateWPM, getWordsCount } from '../../utils';
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
  let id;
  let date;
  const secondsInterval = 10;
  const inputElement = useRef(null);
  const [alreadyTypedText, setAlreadyTypedText] = useState('');
  const [delay, setDelay] = useState(1000);
  const [timerToggle, setTimerToggle] = useState(true);
  const [color, setColor] = useState(true);
  const [text, setText] = useState('');
  const [showGameContent, setShowGameContent] = useState(false);

  const checkValue = (value, length, i) => {
    if (!(value.includes(' '))
        && color
        && (length + value.length === randomText.length)
        && value[i] === randomText[randomText.length - 1]) {
      setAlreadyTypedText(alreadyTypedText.concat(value));
      setText('You Are Successfully Finished...!');
      inputElement.current.setAttribute('disabled', 'true');
    }

    if (value[i] === ' ' && color) {
      setAlreadyTypedText(alreadyTypedText.concat(value));
      setText('');
    }
  };

  const handleChange = ({ currentTarget: { value } }) => {
    setText(value);

    for (let i = 0; i < value.length; i++) {
      if (value[i] !== randomText[alreadyTypedText.length + i]) {
        setColor(false);
        break;
      }

      if (value[i] === randomText[alreadyTypedText.length + i]) {
        setColor(true);
        checkValue(value, alreadyTypedText.length, i);
      }
    }
  };

  const startTimer = () => {
    setTimerToggle(false);
    const secondId = setTimeout(() => {
      console.log(id);
      if (id) {
        clearTimeout(id);
      setDelay(null);
      }
    }, secondsInterval * 1000);
    setDelay(1000);
    inputElement.current.focus();
  };

  const startGame = () => {
    getRandomTextActionCreator();
    setTimerToggle(true);
    if (id) {
      clearTimeout(id);
    }
    setShowGameContent(true);
    id = setTimeout(startTimer, 4000);
  };

  useEffect(() => {
    if (randomText === alreadyTypedText) {
      const result = calculateWPM(secondsInterval, getWordsCount(alreadyTypedText));
      putLastWpmResultRequestActionCreator(result, user.get('nickname'));
    }
    return () => clearTimeout(id);
  }, [
    randomText,
    delay,
    user,
    putLastWpmResultRequestActionCreator,
    alreadyTypedText
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
            <Timer secondsInterval={secondsInterval} delay={delay} toggle={timerToggle} />
          </div>
          <p>{randomText}</p>
          <hr />
          <input
            ref={inputElement}
            type="text"
            className="type-field"
            style={{ backgroundColor: color ? 'lightgreen' : 'lightpink' }}
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
