import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.scss";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <button>Home</button>
      <button>About</button>
      <button>Work</button>
      <button>Contact</button>
    </Menu>
  );
};

export default BurgerMenu;
