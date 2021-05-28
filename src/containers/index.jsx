import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";

import { ViewportProvider } from "../hooks/useViewportWidth";

import { GlobalStyles } from "../components/styled";

import Home from "./Home";
import Signup from "./Signup/Signup";
import Navbar from "../components/Navbar";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ViewportProvider>
    </ThemeProvider>
  );
};

export default App;
