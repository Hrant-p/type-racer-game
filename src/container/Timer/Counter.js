import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useInterval } from './useInterval';

const Timer = ({ secondsInterval }) => {
  const [count, setCount] = useState(secondsInterval);
  const delay = 1000;
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
;
    </Fragment>
  );
};

Timer.propTypes = {
  secondsInterval: PropTypes.number.isRequired
};

export default Timer;
