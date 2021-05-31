import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";

import { ViewportProvider } from "../hooks/useViewportWidth";

import { GlobalStyles } from "../components/styled";

import Home from "./Home";
import Signup from "./Signup/Signup";
import Signin from "./SignIn/Signin";
import Navbar from "../components/Navbar";
import { loadUserData } from "../actions/user";

const App = () => {
  const theme = useSelector((state) => state.theme);
  // const signedIn = useSelector((store) => store.signedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserData());
    return () => {
      // Remove Loading User
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <GlobalStyles />
        <Routes />
        <Navbar />
      </ViewportProvider>
    </ThemeProvider>
  );
};

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact component={"sj"}></Route> */}
      {/* Add Responsive Routing */}
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      {/* Add Responsive Routing */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-white text-9xl">404</h1>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
