import "./Header.css";
import React from 'react';
import BurgerMenu from "./burgermenu/burger";

export default function Header() {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);
  return (
    <div id="header">
      <div className="area">
        <div className="section">
          <div className="container">
            <div className="navbar-wrapper">
              <div role="button" className="name"  tabIndex="0">
                <a href="#" > Portfolio.</a>
              </div>
              <div className="links-wrapper">
                <button>Home</button>
                <button>About</button>
                <button>Work</button>
                <button>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
