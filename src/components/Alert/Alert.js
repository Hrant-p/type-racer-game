import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertDiv = styled.div`
    text-align: center;
    border-radius: 2.5px;
    background-color: silver;
    font-size: 1.5rem;
    color: #fa391d;
`;

const Alert = ({ alert }) => (
  <AlertDiv>
    <p>{alert}</p>
  </AlertDiv>
);

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
};

export default Alert;
