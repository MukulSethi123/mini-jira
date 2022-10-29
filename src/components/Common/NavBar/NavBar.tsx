import React, { useState } from "react";
import "./_navBar.css";
const NavBar = () => {
  const min = {
    width: "10px",
  };
  const [minimize, setMinimize] = useState(false);
  const collapseNavBar = () => {
    setMinimize(!minimize);
  };
  return (
    <div
      className="navBar"
      style={{
        width: minimize ? "10px" : "8rem",
        marginRight: minimize ? "-10rem" : "0",
      }}
    >
      <div onClick={collapseNavBar}>m</div>
      <div
        className="navBar__container"
        style={{ display: minimize ? "none" : "" }}
      >
        <div className="navBar__header">
          <h1>navBar</h1>
        </div>
        <div className="navBar__body">
          <h4>your board</h4>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
