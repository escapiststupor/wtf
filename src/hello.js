import React from "react";
import { api } from "./myUtils";

const { gaup } = api

export async function gwfau() {
  const r = await gaup(123)
  return r
}

export default () => (
  <div>
    <button onClick={gwfau}>fuck</button>
  </div>
);
