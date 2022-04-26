import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to={"/"}>Quiz-On</Link>
      </div>

      <div>
        <ul className="header-links">
          <li className="header-link">
            <Link to={"/"}>Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
