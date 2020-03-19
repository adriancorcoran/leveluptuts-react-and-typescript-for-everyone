import React, { useState, useRef } from "react";

// useRef allows you to create a state attached to a very specific element / variable
// as opposed to state, if a ref value changes it doesn't trigger a rerender

export const Input = () => {
  // const [name, setName] = useState(""); //  typescript will throw an error if anything other than string used here as all input elements produce strings
  // default value will inply the type using type inference
  const [name, setName] = useState<string | undefined>(""); //  can also specifically type the input (will throw an error on the value if null below)

  // const myInput = useRef(null); //  will throw an error as it could null - need to set the type of the useref
  // const myInput = useRef<HTMLElement>(null); //  will throw an error as the generic HTMLElement does not have a value property
  // const myInput = useRef<HTMLInputElement>(null); //  will throw an error as the generic HTMLElement does not have a value property
  const myInput = useRef<HTMLInputElement>(null!); //  make the ref read only, can't change the value using the ref

  // console.log(`ref: ${myInput.current}`); //  show the current iteration of the ref - will output the element
  // if (myInput && myInput.current) {
  //   //  need to check that myInput is not null
  //   console.log(`ref: ${myInput.current.value}`); //  show the current value of the ref
  // }

  // code above is quite verbose and can be simpler
  //  can check that myInput is not null using optional chaining
  // checks value is not null before diving deeper
  console.log(`ref: ${myInput?.current?.value}`); //  returns a true / falsy value

  return (
    <input ref={myInput} value={name} onChange={e => setName(e.target.value)} />
  );
};
