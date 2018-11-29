import React from 'react';

const Menu = () => (
  <div>
    <div className="header">
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        HamburgerMenu
      </label>
    </div>
    <input type="checkbox" id="openSidebarMenu" />

    <div id="sidebarMenu">
      <ul className="sidebarMenuInner">
        <li>Menu</li>
        <li><a href="/" target="_blank">Home</a></li>
        <li><a href="/" target="_blank">Products/Service</a></li>
        <li><a href="/" target="_blank">About Us</a></li>
        <li><a href="/" target="_blank">Contact</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
