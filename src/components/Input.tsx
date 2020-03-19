import React, { useState } from "react";

export const Input = () => {
  // const [name, setName] = useState(""); //  typescript will throw an error if anything other than string used here as all input elements produce strings
  // default value will inply the type using type inference
  const [name, setName] = useState<string | undefined>(""); //  can also specifically type the input (will throw an error on the value if null below)
  return <input value={name} onChange={e => setName(e.target.value)} />;
};
