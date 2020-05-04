// useReducer allows some Redux style management of state using actions and reducers
// gives more fine grained control over the state

import React, { useRef, useContext } from "react";

import { GlobalContext } from "./GlobalState";
import { useClickOutside } from "./useClickOutside";

export const ReducerButtons = () => {
  const ref = useRef<HTMLDivElement>(null!);

  const { rValue, turnOn, turnOff } = useContext(GlobalContext);

  // not just expecting a ref, expecting a ref linked to a HTMLDivElement
  useClickOutside(ref, () => {
    console.log(`clicked outside`);
  });

  // dispatch will run a function for us
  return (
    <div ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
      {/* <button onClick={() => dispatch({ type: "tow" })}>Action Two</button> */}
    </div>
  );
};
