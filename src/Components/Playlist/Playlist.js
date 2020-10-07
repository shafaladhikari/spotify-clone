import React from "react";
import ListItem from "./ListItem";

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <span className="Playlist__heading">{props.heading}</span>
      <span className="Playlist__subheading">{props.subheading}</span>
      <div className="List">
        <ListItem
          heading="Sad Bops"
          subheading="Slow Dance in the sad vibes."
        />
        <ListItem
          heading="Sad Bops"
          subheading="Slow Dance in the sad vibes."
        />
        <ListItem
          heading="Sad Bops"
          subheading="Slow Dance in the sad vibes."
        />
        <ListItem
          heading="Sad Bops"
          subheading="Slow Dance in the sad vibes."
        />
        <ListItem
          heading="Sad Bops"
          subheading="Slow Dance in the sad vibes."
        />
        <ListItem
          heading="Sad Bops"
          subheading="Slow Dance in the sad vibes."
        />
      </div>
    </div>
  );
};

export default Playlist;
