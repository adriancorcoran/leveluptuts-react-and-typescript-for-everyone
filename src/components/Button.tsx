import React from "react";

type Props = {
  // onClick(): string;  //  method returns string
  // onClick(): void; //  method returns nothing
  // onClick(text: string): void; //  method with params returns nothing
  // onClick(text: string): void; //  method returns nothing
  // onClick: () => void; //  method is a function that returns nothing
  onClick: (text: string) => void; //  method is a function accepting string param that returns nothing
};

export const Button = ({ onClick }: Props) => {
  return <button onClick={() => onClick("Hi There!")}>Click Me!</button>;
};
