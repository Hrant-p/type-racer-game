import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../../customHooks/useInterval';

const Timer = ({ secondsInterval, delay }) => {
  const [count, setCount] = useState(secondsInterval);
  const minutes = Math.floor(count / 60);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, delay);

  return (
    <Fragment>
      {count
        ? (
          <h5>
            {`${minutes}: ${count - minutes * 60}`}
          </h5>
        ) : <p>Time finished!</p>}
    </Fragment>
  );
};

Timer.propTypes = {
  secondsInterval: PropTypes.number.isRequired,
  delay: PropTypes.number
};

Timer.defaultProps = {
  delay: null
};

export default Timer;
