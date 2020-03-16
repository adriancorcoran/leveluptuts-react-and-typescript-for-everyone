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

type Props = {
  title: string; //  required
  isActive?: boolean; //  optional
};

export const Head = ({ title = "Hello", isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
