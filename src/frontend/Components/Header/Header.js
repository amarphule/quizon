import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo"> Quiz-On</div>

      <div>
        <ul className="header-links">
          <li className="header-link">Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
