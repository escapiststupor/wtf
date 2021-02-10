import React from "react";
import { api } from "./myUtils";

const { intersection } = api

export function rrr() {}

export default () => (
  <div>
    <button onClick={() => intersection([], [])}>fuck</button>
  </div>
);
