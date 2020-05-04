import React, { createContext, useReducer } from "react";

export const initialValues = {
  rValue: true,
  turnOn: () => {},
  turnOff: () => {},
};

export const GlobalContext = createContext(initialValues);

// type State = {
//   rValue: boolean;
// };

interface State {
  rValue: boolean;
}

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
      return state; //  need to have a default in case of unknown action
  }
}

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <GlobalContext.Provider
      value={{
        rValue: state.rValue,
        turnOn: () => dispatch({ type: "one" }),
        turnOff: () => dispatch({ type: "two" }),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Global State and Context
/*
- we provide the values and tune functions to change them in the global provider
- the button can then call the functions to change state
- based on the state rValue, the visibility panel in App.tsx will togglw visibility
*/

// Types vs Interfaces - https://www.educba.com/typescript-type-vs-interface/

// Types

// - More constrained
// - Better intersecting
// - Better in error messages
// - Can be used in unions

// Interfaces

// - Better when authoring a library
// - Extendable
// - Can be augmented
