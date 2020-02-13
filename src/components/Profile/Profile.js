import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import './Profile.scss';

const Profile = ({ user, lastResult, showEffect }) => {
  let result;

  if (lastResult === null) {
    result = user.get('lastTypeResult');
  } else if (user.get('lastTypeResult') === null) {
    result = lastResult;
  } else if (user.get('lastTypeResult') !== null) {
    result = lastResult;
  }

  return (
    <section className="profile">
      <h3>Profile</h3>
      <p>
        <b>
          {`Name: ${user.get('nickname')}`}
          <br />
          {`Email: ${user.get('login')}`}
        </b>
        <br />
        <span className={showEffect ? 'result-area' : ''}>
          {`Last Typing WPM Result: ${result === null ? 'No result' : result}`}
        </span>
      </p>
      <br />
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
  lastResult: PropTypes.number,
  showEffect: PropTypes.bool.isRequired
};

Profile.defaultProps = {
  lastResult: null
};

export default Profile;
