import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React from "react";
import "./_navBar.css";
interface NavBarProps {
  closeNavBar(): void;
  minimize: boolean;
}
const NavBar = ({ closeNavBar, minimize }: NavBarProps) => {
  return (
    <div
      className="navBar"
      style={{
        width: minimize ? "10px" : "8rem",
      }}
    >
      <ArrowBackIcon
        className="navBar__closeButton clickable"
        onClick={closeNavBar}
        style={
          minimize
            ? {
                transform: "rotate(180deg)",
                transition: " transform .5s",
              }
            : {
                transform: "rotate(0deg)",
                transition: " transform .5s",
              }
        }
      />
      <div
        className="navBar__container"
        style={
          minimize
            ? {
                position: "fixed",
                left: "-20rem",
                top: "5rem",
                transition: "left .5s ,transform 2s",
              }
            : {
                position: "fixed",
                left: "1rem",
                top: "5rem",
                transition: "left .5s ,transform 2s",
              }
        }
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
