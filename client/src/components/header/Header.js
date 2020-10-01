import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { greeting, aboutInfo, } from "../../portfolio";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          {aboutInfo.viewAbout &&
            <li>
              <a href="#about">About</a>
            </li>
          }
          <li>
            <a href="#skill">Skills</a>
          </li>


          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom >


  );
}
export default Header;
