import { useEffect, useState } from "react";

const useAxios = (callback, call) => {
  const [connect, setConnect] = useState(false);
  const [state, setState] = useState(() => ({ error: null, loading: false, data: null }));
  useEffect(() => {
    const fetch = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const res = await callback();
        setState((prev) => ({ ...prev, loading: false, data: res.data }));
      } catch (error) {
        if (error) setState((prev) => ({ ...prev, loading: false, error }));
      }
      setConnect(false);
    };
    call && fetch();
  }, [callback, call]);

  return state;
};

export default useAxios;
