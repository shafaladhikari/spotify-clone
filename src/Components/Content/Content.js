import React from "react";
import Playlist from "../Playlist/Playlist";

const Content = () => {
  return (
    <div className="Content">
      <Playlist heading="Jump back In" subheading="Your top listens " />
      <Playlist heading="Recently played" />
    </div>
  );
};

export default Content;
