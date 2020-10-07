import React from "react";
import sprite from "./sprite.svg";
const Icon = (props) => {
  return (
    <div className={props.rounded ? `Icon rounded` : `Icon`}>
      <svg className={props.clName}>
        <use href={sprite + props.SvgName} />
      </svg>
    </div>
  );
};

export default Icon;
