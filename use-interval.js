import { useEffect, useRef, useState } from "react";

function useInterval(callback, delay, limit) {
  const [count, setCount] = useState(1);
  const intervalRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (
      (typeof delay === "number" && count <= limit) ||
      (typeof delay === "number" && !limit)
    ) {
      intervalRef.current = window.setInterval(() => {
        callbackRef.current(count);
        setCount((c) => c + 1);
      }, delay);
      return () => {
        window.clearInterval(intervalRef.current);
      };
    }
  }, [delay, count]);

  return intervalRef;
}

export default useInterval;
