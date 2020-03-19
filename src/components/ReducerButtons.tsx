// useReducer allows some Redux style management of state using actions and reducers
// gives more fine grained control over the state

import React, { useReducer } from "react";

const initialState = { rValue: true };

type State = {
  rValue: boolean;
};

// generic string
// type Action = {
//   type: string;
//   // payload: { //  could also have a payload of data which you can type
//   //   ...otherstuff
//   // }
// };

// explicitly define the action types
// type Action = {
//   type: "one" | "two";
// };

// explicitly define complex action types
type Action =
  | { type: "one" }
  | { type: "two" }
  | { type: "three"; payload: true }
  | { type: "four" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { rValue: true };
    case "two":
      return { rValue: false };
    default:
      return state; //  need to have a default in case if unknown action
  }
}

export const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // dispatch will run a function for us
  return (
    <div>
      {state?.rValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
      {/* <button onClick={() => dispatch({ type: "tow" })}>Action Two</button> */}
    </div>
  );
};