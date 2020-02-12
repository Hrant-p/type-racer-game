import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorDiv = styled.div`
    text-align: center;
    border-radius: 2.5px;
    padding: 0.25rem;
    background-color: darkorange;
    font-size: 1.5rem;
    color: whitesmoke;
    transition: ease-out 0.2s;
    :hover{
      box-shadow: 0 0 16px 6px gray;
    } 
`;

const Error = ({ error }) => <ErrorDiv><p><b>{error}</b></p></ErrorDiv>;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
