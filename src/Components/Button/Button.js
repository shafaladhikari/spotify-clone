import React from "react";

const Button = (props) => {
  return (
    <button className={props.clName ? props.clName : "" + "Button"}>
      {props.children}
    </button>
  );
};

export default Button;
