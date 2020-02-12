import React, { useEffect, useRef, useState } from 'react';
import './Game.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { CircularProgressbar } from 'react-circular-progressbar';
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
import { calculateWPM, completionPercentCalc } from '../../utils';
import Timer from '../Timer/Timer';
import { useInterval } from '../../customHooks/useInterval';
import 'react-circular-progressbar/dist/styles.css';
import Error from '../../components/Error/Error';
import markTextMatches from '../../utils/markTextMatches';

let id;

const Game = ({
  user,
  children,
  randomText,
  lastResult,
  textLoading,
  textError,
  getRandomTextActionCreator,
  clearRandomTextCreator,
  getLastWpmResultActionCreator,
  putLastWpmResultRequestActionCreator
}) => {
  const secondsInterval = 150;
  const inputElement = useRef(null);
  const [stopWatch, setStopWatch] = useState(0);
  const [tick, setTick] = useState(null);
  const [delay, setDelay] = useState(null);
  const [alreadyTypedText, setAlreadyTypedText] = useState('');
  const [timerToggle, setTimerToggle] = useState(true);
  const [color, setColor] = useState(true);
  const [text, setText] = useState('');
  const [showGameContent, setShowGameContent] = useState(false);
  const completionPercent = completionPercentCalc(randomText, alreadyTypedText);

  const checkValue = (value, length, i) => {
    if (!(value.includes(' '))
        && color
        && (length + value.length === randomText.length)
        && value[i] === randomText[randomText.length - 1]) {
      setAlreadyTypedText(alreadyTypedText.concat(value));
      setText('You Are Successfully Finished...!');
      inputElement.current.setAttribute('disabled', 'true');
    } else if (value[i] === ' ' && color) {
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
    setStopWatch(0);
    setTimerToggle(false);
    setDelay(1000);
    inputElement.current.focus();
    setTick(1000);
  };

  const startGame = () => {
    getRandomTextActionCreator();
    setText('');
    setAlreadyTypedText('');
    setTimerToggle(true);
    setDelay(1000);
    if (id) {
      clearTimeout(id);
    }
    setShowGameContent(true);
    id = setTimeout(startTimer, 4000);
  };

  useInterval(() => {
    if (stopWatch < secondsInterval) {
      setStopWatch(stopWatch + 1);
    }
  }, tick);

  useEffect(() => () => clearInterval(id), []);

  useEffect(() => {
    if (randomText === alreadyTypedText) {
      const finalInterval = stopWatch < secondsInterval ? stopWatch : secondsInterval;
      const result = calculateWPM(finalInterval, alreadyTypedText);
      setTick(null);
      setDelay(null);
      putLastWpmResultRequestActionCreator(result, user.get('nickname'));
    }
  }, [
    randomText,
    user,
    putLastWpmResultRequestActionCreator,
    alreadyTypedText,
    stopWatch,
  ]);

  return (
    <div className="game">
      <div className="profile-and-btn">
        {children}
        <button
          type="button"
          className="starter-btn"
          onClick={startGame}
        >
          New Game
        </button>
      </div>
      {textError && <Error error={textError} />}
      {textLoading && <Spinner />}
      <div className={showGameContent ? 'fadeIn' : 'fadeOut'}>
        <div className="time-area">
          {!textError && (
            <Timer
              seconds={secondsInterval}
              delay={delay}
              toggle={timerToggle}
            />
          )}
        </div>
        <hr />
        <div className="text-area">
          {markTextMatches(randomText, alreadyTypedText, text)}
        </div>
        <hr />
        <div className="typing-area">
          <div className="progress-bar">
            <CircularProgressbar
              value={completionPercent}
              text={`${completionPercent}%`}
            />
          </div>
          <input
            ref={inputElement}
            type="text"
            className="type-field"
            style={{ backgroundColor: color ? 'lightgreen' : 'lightpink' }}
            value={text}
            onChange={handleChange}
            disabled={timerToggle}
          />
        </div>
      </div>
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
  randomText: '',
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
