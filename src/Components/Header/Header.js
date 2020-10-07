import React from "react";
import Icon from "../../Icons/Icon";
import Button from "../Button/Button";
const Header = () => {
  return (
    <header>
      <div className="headIcon">
        <Icon SvgName="#icon-chevron-left" rounded></Icon>
        <Icon SvgName="#icon-chevron-right" rounded></Icon>
      </div>
      <Button>Upgrade</Button>
    </header>
  );
};

export default Header;
