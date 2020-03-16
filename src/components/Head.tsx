import React from "react";

// title
// isActive

// old way of declaring props
//  ------------------------------------------------
// Head.propTypes = {
//   title: PropTypes.string,
//   isActive: PropTypes.bool
// };

// old way of declaring default props
//  ------------------------------------------------
// Head.defaultProps = {
//   title: "Hello",
//   isActive: true
// };

// typescript way
//  ------------------------------------------------

// type User = {
//   name: string;
// };

type Props = {
  title: string; //  required
  isActive?: boolean; //  optional
  // thing: number; //  number
  // thing2: []; //  array
  // thing3: string[]; //  array of strings
  // status: "loading" | "loaded"; //  specific string
  // thing4: object; //  object (not really used)
  // thing5: {}; //  object
  // thing6: {
  //   name: string;
  // }; //  object with specific key type
  // func: () => void; //  function returning specific type
  // user: User; //  custom object type
};

export const Head = ({ title = "Hello", isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
