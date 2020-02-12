import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

const Profile = ({ user, result }) => {
  return (
    <section className="profile">
      <h3>
        {`Name - ${user.get('nickname')}`}
      </h3>
      <h5>
        {`Email - ${user.get('login')}`}
      </h5>
      <p>
        {result && `Last Typing Words Per Minute Result is ${result}`}
      </p>
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
  result: PropTypes.number,
};

Profile.defaultProps = {
  result: null
};

export default Profile;
