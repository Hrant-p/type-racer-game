import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import './Home.scss';
import { connect } from 'react-redux';
import bgImage from '../../img/coder.jpeg';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import Game from '../Game/Game';
import { currentUserSelector } from '../../store/selectors/userSelector';
import { lastResultSelector } from '../../store/selectors/textSelector';

const Home = ({ user, lastTypeResult, lastResult }) => {
  let result = user.get('lastTypeResult') ? user.get('lastTypeResult') : lastResult;

  return (
    <DivWithBackground bgImage={bgImage}>
      {result}
      <Game />
    </DivWithBackground>
  );
};

Home.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
  lastResult: PropTypes.number
};

Home.defaultProps = {
  lastResult: null
};

const mapStateToProps = state => ({
  user: currentUserSelector(state),
  lastResult: lastResultSelector(state)
});

export default connect(mapStateToProps, null)(Home);
