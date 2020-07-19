import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import "jest-canvas-mock";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Header from "../../components/Header";

test("back to home", () => {
  render(
    <BrowserRouter>
      <Switch>
        <Header />
      </Switch>
    </BrowserRouter>
  );
  // toBeEmptyDOMElement() in buttom
  expect(screen.getByText("voltar para a home").closest("a")).toHaveAttribute(
    "href",
    "/"
  );
});
