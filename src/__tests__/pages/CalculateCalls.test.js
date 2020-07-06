import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import "jest-canvas-mock";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CalculateCalls from "../../pages/CalculateCalls";

test("check info text", () => {
  render(
    <BrowserRouter>
      <Switch>
        <CalculateCalls />
        ``
      </Switch>
    </BrowserRouter>
  );
  expect(screen.queryByTestId("info-label")).toBeInTheDocument();
});
