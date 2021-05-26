import React, { useState, createContext, useEffect } from "react";

const ViewportContext = createContext({});

const debounce = (callback, timeValue) => {
  let timeoutId;
  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback();
    }, timeValue);
  };
};

const ViewportProvider = ({ children }) => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  const [view, setView] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const handleWindowResize = debounce(() => {
    // setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
    setView(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  }, 500);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return <ViewportContext.Provider value={view}>{children}</ViewportContext.Provider>;
};

const useViewport = () => {
  const { width, height } = React.useContext();
  return { width, height };
};

export { ViewportProvider, useViewport as default };
