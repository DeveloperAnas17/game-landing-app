import React from "react";
import styled from "styled-components";
import { logo } from "../assets/images";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logo} alt="" />
        </HeaderLogo>

        <HeaderNav>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">Champions</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  pointer-events: none;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
const HeaderLogo = styled.div`
  width: 145px;
  pointer-events: visible;
  img {
    width: 100%;
  }
`;
const HeaderNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    margin-right: 1rem;
    a {
      display: inline-block;
      padding: 0.5rem;
      text-transform: uppercase;
      position: relative;
      pointer-events: visible;

      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        background-color: #d0a85c;
        transition: width 0.3s ease;
      }

      &:hover::before,
      &:hover::after {
        width: 50%;
      }

      &::before {
        left: 0;
        top: 0;
      }

      &::after {
        right: 0;
        bottom: 0;
      }
    }
  }
`;

export default Header;
