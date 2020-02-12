import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';

const Aside = styled.aside`
        padding: 5px;
        border: 1px solid darkblue;
        border-radius: 7.5px;
        text-align: center;
        font-family: "Segoe MDL2 Assets",serif
`;

const Profile = ({ user, result }) => (
  <section className="profile">
    <Aside>
      <h5 style={{ margin: '2px' }}>
          Profile
      </h5>
      <b>
        {`Name - ${user.get('nickname')}`}
        <br />
        {`Email - ${user.get('login')}`}
      </b>
      <br />
      {result && `Last Typing WPM Result - ${result}`}
    </Aside>
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
