import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../components/styled";

const App = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handelThemeSwitch = () =>
    dispatch({ type: "@theme/switch", payload: theme.name === "dark" ? "light" : "dark" });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={handelThemeSwitch}>Change</button>
      <pre>{JSON.stringify(theme)}</pre>
    </ThemeProvider>
  );
};

export default App;
