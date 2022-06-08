import React from "react";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import EditLocationSharpIcon from "@material-ui/icons/EditLocationSharp";
function Header() {
  return (
    <header>
      <h1>
        <EventNoteOutlinedIcon /> mynote <EditLocationSharpIcon />
      </h1>
    </header>
  );
}

export default Header;
