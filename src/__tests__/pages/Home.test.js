import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import "jest-canvas-mock";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../../pages/Home";

test("proceed to the calculations page", () => {
  render(
    <BrowserRouter>
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  );
  expect(screen.getByText("Conferir").closest("a")).toHaveAttribute(
    "href",
    "/calculate"
  );
});
