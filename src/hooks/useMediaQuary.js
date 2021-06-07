import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery) => {
  const mediaQueryString = `(${mediaQuery})`;
  const [isVerified, setIsVerified] = useState(window.matchMedia(mediaQueryString).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);
    try {
      mediaQueryList.addEventListener("change", documentChangeHandler);
    } catch (e) {
      mediaQueryList.addListener(documentChangeHandler);
    }

    return () => {
      try {
        mediaQueryList.removeEventListener("change", documentChangeHandler);
      } catch (e) {
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, [mediaQuery]);

  return isVerified;
};

export default useMediaQuery;
