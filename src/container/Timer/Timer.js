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

  if (toggle) {
    return (
      <h4>
        {count || 'Go!'}
      </h4>
    );
  }

  return count
    ? (
      <h5>
        {`${minutes}: ${count - minutes * 60}`}
      </h5>
    ) : <p>Time has finished !</p>;
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  delay: PropTypes.number
};

Timer.defaultProps = {
  delay: null
};

export default Timer;
