import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Hello, { rrr } from "../hello";
import { api } from "../myUtils";

const { intersection } = api

jest.mock("../myUtils", () => {
  const myUtils = jest.requireActual("../myUtils");
  return {
    ...myUtils,
    api: {
      ...myUtils.api,
      intersection: jest.fn()
    }
  };
});

beforeEach(() => {
  jest.resetModules()
  jest.clearAllMocks()
})

test("React Testing Library works!", () => {
  const { getByRole } = render(<Hello />);
  fireEvent.click(getByRole("button"));
  expect(intersection).toHaveBeenCalled();
});
