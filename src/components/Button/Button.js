import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ content, onClick }) => (
  <button
    type="button"
    className="designed-btn"
    onClick={onClick}
  >
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;
