import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import './Profile.scss';

const Profile = ({ user, result }) => (
  <section className="profile">
    <aside>
      <h3>Profile</h3>
      <p>
        <b>
          {`Name: ${user.get('nickname')}`}
          <br />
          {`Email: ${user.get('login')}`}
        </b>
        <br />
        {result && `Last Typing WPM Result: ${result}`}
      </p>
      <br />
    </aside>
  </section>
);

Profile.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
  result: PropTypes.number,
};

Profile.defaultProps = {
  result: null
};

export default Profile;
