import React, { useState } from 'react';
import './Game.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  clearRandomText,
  getLastWpmResult,
  getRandomTextRequest
} from '../../store/actions/textActionCreators';
import {
  lastTypeResultSelector,
  randomTextSelector,
  textErrorSelector,
  textLoadingSelector
} from '../../store/selectors/textSelector';

const Game = ({
  randomText,
  lastTypeResult,
  textLoading,
  textError,
  getRandomTextActionCreator,
  clearRandomTextCreator,
  getLastWpmResultActionCreator
}) => {
  const [typedText, setTypedText] = useState(null);
  const [showGameContent, setshowGameContent] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setTypedText(value);
  };
  const startGame = () => {
    getRandomTextActionCreator();
    setshowGameContent(true);
  };

  return (
    <div className="game">
            Type Racer Game
      <button
        type="button"
        onClick={startGame}
      >
          Start New Game
      </button>
      {showGameContent && (
        <>
          <p>
            {randomText}
          </p>
          <input
            type="text"
            value={typedText}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

Game.propTypes = {
  randomText: PropTypes.string,
  lastTypeResult: PropTypes.string,
  textLoading: PropTypes.bool.isRequired,
  textError: PropTypes.string,
  getRandomTextActionCreator: PropTypes.func.isRequired,
  clearRandomTextCreator: PropTypes.func.isRequired,
  getLastWpmResultActionCreator: PropTypes.func.isRequired
};

Game.defaultProps = {
  randomText: null,
  lastTypeResult: null,
  textError: null
};

const mapStateToProps = state => ({
  randomText: randomTextSelector(state),
  lastTypeResult: lastTypeResultSelector(state),
  textLoading: textLoadingSelector(state),
  textError: textErrorSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRandomTextActionCreator: getRandomTextRequest,
  clearRandomTextCreator: clearRandomText,
  getLastWpmResultActionCreator: getLastWpmResult
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
