import React, { useEffect, useMemo, useState } from 'react';
import './Game.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import {
  clearRandomText,
  getLastWpmResult,
  getRandomTextRequest, putLastWpmResultRequest
} from '../../store/actions/textActionCreators';
import {
  lastTypeResultSelector,
  randomTextSelector,
  textErrorSelector,
  textLoadingSelector
} from '../../store/selectors/textSelector';
import Spinner from '../../components/Spinner/Spinner';
import { currentUserSelector } from '../../store/selectors/userSelector';
import { calculateWPM } from '../../API/helpers';
import Timer from '../Timer/Timer';
import gif from '../../img/start.gif';
import BeforeStartTimer from '../../components/BeforeStartTimer/BeforeStartTimer';

const Game = ({
  user,
  randomText,
  lastTypeResult,
  textLoading,
  textError,
  getRandomTextActionCreator,
  clearRandomTextCreator,
  getLastWpmResultActionCreator,
  putLastWpmResultRequestActionCreator
}) => {
  const txt = 'Lorem ipsum dolor sit amet';
  const count = randomText && txt
    .trim()
    .match(/.*?[\"'.?,;:\ ]+?/g)
    .filter(i => i !== ' ' && i !== '')
    .length;
  const secondsInterval = 120;
  const [delay, setDelay] = useState(null);
  const [text, setText] = useState('');
  const [showGameContent, setShowGameContent] = useState(false);
  const [wpmResult, setWpmResult] = useState(null);

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const startGame = () => {
    getRandomTextActionCreator();
    let id;
    if (id) {
      clearTimeout(id);
    }
    setDelay(null);
    setShowGameContent(true);
    id = setTimeout(() => setDelay(1000),
      4000);
  };

  useEffect(() => {
    if (text === txt) {
      const result = calculateWPM(secondsInterval, count);
      setWpmResult(result);
      putLastWpmResultRequestActionCreator(result, user.get('nickname'));
      console.log('result', result);
    }
    console.log('wpmResult', wpmResult);
  }, [text, wpmResult, txt, count, delay]);

  return (
    <div className="game">
            Type Racer Game
      {textLoading && <Spinner />}
      <button
        type="button"
        onClick={startGame}
      >
          Start New Game
      </button>
      {showGameContent && (
        <>
          <div className="time-area">
            {delay ? (
              <Timer
                secondsInterval={secondsInterval}
                delay={delay}
              />
            ) : <BeforeStartTimer />}
          </div>
          <p>
            {randomText}
          </p>
          <hr />
          <input
            className="type-field"
            type="text"
            value={text}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

Game.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
  randomText: PropTypes.string,
  lastTypeResult: PropTypes.string,
  textLoading: PropTypes.bool.isRequired,
  textError: PropTypes.string,
  getRandomTextActionCreator: PropTypes.func.isRequired,
  clearRandomTextCreator: PropTypes.func.isRequired,
  getLastWpmResultActionCreator: PropTypes.func.isRequired,
  putLastWpmResultRequestActionCreator: PropTypes.func.isRequired
};

Game.defaultProps = {
  randomText: null,
  lastTypeResult: null,
  textError: null
};

const mapStateToProps = state => ({
  randomText: randomTextSelector(state),
  lastTypeResult: lastTypeResultSelector(state),
  user: currentUserSelector(state),
  textLoading: textLoadingSelector(state),
  textError: textErrorSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRandomTextActionCreator: getRandomTextRequest,
  clearRandomTextCreator: clearRandomText,
  getLastWpmResultActionCreator: getLastWpmResult,
  putLastWpmResultRequestActionCreator: putLastWpmResultRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
