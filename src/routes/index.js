import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CalculateCalls from "../pages/CalculateCalls";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calculate" exact component={CalculateCalls} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
