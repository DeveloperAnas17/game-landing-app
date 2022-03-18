import React from "react";
import { FiMenu } from "react-icons/fi";

import "./header.scss";

import { logo } from "../../assets/images";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__nav">
          <li>
            <a href="#">overview</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">champions</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
        </ul>
        <FiMenu className="menu-icon" />
      </div>
    </div>
  );
};

export default Header;
