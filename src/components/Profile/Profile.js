import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import './Profile.scss';

const Profile = ({ user, result }) => (
  <section className="profile">
    <aside>
      <h5>Profile</h5>
      <b>
        {`Name - ${user.get('nickname')}`}
        <br />
        {`Email - ${user.get('login')}`}
      </b>
      <br />
      {result && `Last Typing WPM Result - ${result}`}
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
