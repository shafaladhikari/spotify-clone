import React from "react";

const Button = (props) => {
  return <button className={`Button ${props.clName}`}>{props.children}</button>;
};

export default Button;
