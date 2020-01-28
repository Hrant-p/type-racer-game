import React, { useState } from 'react';
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
  const [typedText, setTypedText] = useState('');
  const [wpmResult, setWpmResult] = useState(null);
  const [showGameContent, setshowGameContent] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setTypedText(value);
  };
  const startGame = () => {
    getRandomTextActionCreator();
    setshowGameContent(true);
    if (wpmResult) {
      putLastWpmResultRequestActionCreator(wpmResult, user.get('nickname'));
    }
  };

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
  textLoading: textLoadingSelector(state),
  textError: textErrorSelector(state),
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRandomTextActionCreator: getRandomTextRequest,
  clearRandomTextCreator: clearRandomText,
  getLastWpmResultActionCreator: getLastWpmResult,
  putLastWpmResultRequestActionCreator: putLastWpmResultRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
