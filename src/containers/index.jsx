import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";

import { ViewportProvider } from "../hooks/useViewportWidth";

import { theme } from "../theme";
import { GlobalStyles } from "../components/styled";

import Home from "./Home";
import Signup from "./Signup/Signup";
import Signin from "./SignIn/Signin";
import Navbar from "../components/Navbar";
import { loadUserData } from "../actions/user";
import Contest from "./Contest/Contest";

const App = () => {
  const oldTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserData());
    return () => {
      // Remove Loading User
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ ...oldTheme, ...theme }}>
      <ViewportProvider>
        <GlobalStyles />
        <Navbar />
        <Routes />
      </ViewportProvider>
    </ThemeProvider>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Signup} />
      <Route exact path="/login" component={Signin} />
      <Route exact path="/contest" component={Contest} />

      <Route exact path="/" component={Home} />
      <Route>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-white text-9xl">404</h1>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
