import { useEffect, useState } from "react";

const useDebounced = (value, timeoutValue) => {
  if (!timeoutValue) throw new Error("Timeout Value Not Passed");
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeoutValue);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, timeoutValue]);

  return debouncedValue;
};

export default useDebounced;
