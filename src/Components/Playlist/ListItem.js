import React from "react";
import Image from "../../Images/sadbops.jfif";
import Icon from "../../Icons/Icon";
const ListItem = (props) => {
  return (
    <div className="ListItem">
      <img src={Image} className="ListItem__photo" alt="Playlist" />
      <span className="ListItem__heading">{props.heading}</span>
      <span className="ListItem__subheading">{props.subheading}</span>
      <Icon SvgName="#icon-controller-play" rounded />
    </div>
  );
};

export default ListItem;
