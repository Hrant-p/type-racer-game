import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../../customHooks/useInterval';
import BeforeStartTimer from '../../components/BeforeStartTimer/BeforeStartTimer';

const Timer = ({ secondsInterval, delay, toggle }) => {
  const [count, setCount] = useState(secondsInterval);
  const minutes = Math.floor(count / 60);

  useInterval(() => {
    // if (count) {
      setCount(count - 1);
    // }
  }, delay);

  useEffect(() => {
    if (toggle) {
      setCount(secondsInterval);
    }
  });

  if (toggle) {
    return <BeforeStartTimer />;
  }

  return (
    <Fragment>
      {count
        ? (
          <h5>
            {`${minutes}: ${count - minutes * 60}`}
          </h5>
        ) : <p>Time has finished !</p>}
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
