import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../components/styled";
import { ViewportProvider } from "../hooks/useViewportWidth";

const App = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handelThemeSwitch = () =>
    dispatch({ type: "@theme/switch", payload: theme.name === "dark" ? "light" : "dark" });

  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <GlobalStyles />
        <button onClick={handelThemeSwitch}>Fuck </button>
        <pre>{JSON.stringify(theme, null, 2)}</pre>
      </ViewportProvider>
    </ThemeProvider>
  );
};

export default App;
