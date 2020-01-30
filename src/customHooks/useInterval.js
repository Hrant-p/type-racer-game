import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id;
    if (delay !== null || delay !== 0) {
      id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [delay]);
}
