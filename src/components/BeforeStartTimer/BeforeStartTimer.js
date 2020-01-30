import React, { useState } from 'react';
import { useInterval } from '../../customHooks/useInterval';

const BeforeStartTimer = () => {
  const [count, setCount] = useState(3);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);

  if (!count) {
    return <h4>Go!</h4>;
  }

  return (
    <h4>
      {count}
    </h4>
  );
};

export default BeforeStartTimer;
