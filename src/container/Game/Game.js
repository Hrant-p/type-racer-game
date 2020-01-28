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

const Game = () => {
  const [typedText, setTypedText] = useState(null);
  const handleChange = ({ target: { value } }) => {
    setTypedText(value);
  };
  return (
    <div className="game">
            Type Racer Game
      <button type="button">
          Start Game
      </button>
      <p>
        {null}
      </p>
      <input
        type="text"
        value={typedText}
        onChange={handleChange}
      />
    </div>
  );
};

Game.propTypes = {

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
