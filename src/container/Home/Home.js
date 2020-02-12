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
import Profile from '../../components/Profile/Profile';

const Home = ({ user, lastResult }) => {
  let result;
  if (lastResult === null) {
    result = user.get('lastTypeResult');
  } else if (user.get('lastTypeResult') === null) {
    result = lastResult;
  } else if (user.get('lastTypeResult') !== null) {
    result = lastResult;
  }

  return (
    <DivWithBackground bgImage={bgImage}>
      <Game>
        <Profile
          user={user}
          result={result}
        />
      </Game>
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
