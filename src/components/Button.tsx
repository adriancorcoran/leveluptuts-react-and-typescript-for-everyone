import React from "react";

type Props = {
  // various ways of typing a function call
  //  ------------------------------------------------
  // onClick(): string;  //  method returns string
  // onClick(): void; //  method returns nothing
  // onClick(text: string): void; //  method with params returns nothing
  // onClick(text: string): void; //  method returns nothing

  // most common ways in React
  //  ------------------------------------------------
  // onClick: () => void; //  method is a function that returns nothing
  // onClick: (text: string) => void; //  method is a function accepting string param that returns nothing

  // need to type an event call
  // react takes over the event form the browser and therefore has a specific event type
  // onClick: (e: React.MouseEvent) => void; //  basic mouse event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; //  more specific mouse event from a button click
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void; //  common when using forms
};

export const Button = ({ onClick }: Props) => {
  // clicking a button calls a function which does something
  // return <button onClick={() => onClick("Hi There!")}>Click Me!</button>;

  // clicking a button uses the function passed in via the props
  return <button onClick={onClick}>Click Me!</button>;
};
