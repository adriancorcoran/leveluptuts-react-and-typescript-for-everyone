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
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void; //  common when using forms

  // typing children props coming into the component
  //  ------------------------------------------------
  // children: string; //  only use this if you know exactly what children types will be coming in
  children: React.ReactNode; //  mneed to define this here to avoid a typing error below
};

//  ------------------------------------------------
// use this code if there are no children, or you know exactly what the children are

// export const Button = ({ onClick, children }: Props) => {

// clicking a button calls a function which does something
// return <button onClick={() => onClick("Hi There!")}>Click Me!</button>;

// clicking a button uses the function passed in via the props
//   return <button onClick={onClick}>{children}</button>;
// };

//  ------------------------------------------------
// use this (more common) code for typing components that have children

// the component takes the defined props above and merges in the fact that it should
// have React children components as well
// React.FC = React Functional Component
export const Button: React.FC<Props> = ({ onClick, children }: Props) => {
  // clicking a button calls a function which does something
  // return <button onClick={() => onClick("Hi There!")}>Click Me!</button>;

  // clicking a button uses the function passed in via the props
  return <button onClick={onClick}>{children}</button>;
};
