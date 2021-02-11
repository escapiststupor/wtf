import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Hello, { gwfau } from "../hello";
import { api } from "../myUtils";

const { gaup } = api

jest.mock("../myUtils", () => {
  const myUtils = jest.requireActual("../myUtils");
  return {
    ...myUtils,
    api: {
      ...myUtils.api,
      gaup: jest.fn()
    }
  };
});

beforeEach(() => {
  jest.resetModules()
  jest.clearAllMocks()
})

test("React Testing Library works!", async () => {
  gaup.mockResolvedValue(123)
  await gwfau()
  expect(gaup).toHaveBeenCalledWith(123);
});
