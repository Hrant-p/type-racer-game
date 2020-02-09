import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <div style={{
    textAlign: 'center',
    borderRadius: '2.5px',
    padding: '0.25rem',
    backgroundColor: 'darkorange',
    fontSize: '1.5rem',
    color: 'whitesmoke'
  }}
  >
    <p><b>{error}</b></p>
  </div>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
