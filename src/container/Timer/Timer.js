import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../../customHooks/useInterval';

const Timer = ({ seconds, delay, toggle }) => {
  const [count, setCount] = useState(seconds);
  const minutes = Math.floor(count / 60);

  useInterval(() => {
    if (count) {
      setCount(count - 1);
    }
  }, delay);

  useEffect(() => {
    if (toggle) {
      setCount(3);
    } else {
      setCount(seconds);
    }
  }, [toggle, seconds]);

  let secondsForDrawing = (count - minutes * 60);
  let timeField = count ? (
    `${minutes}: ${secondsForDrawing < 10 ? (
      `0${secondsForDrawing}`
    ) : secondsForDrawing}`
  ) : (' Time has finished !');

  return (
    <p className="timer">
        {toggle ? (
          count || 'Go!'
        ) : timeField}
    </p>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  delay: PropTypes.number
};

Timer.defaultProps = {
  delay: null
};

export default Timer;
