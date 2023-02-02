import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "../styles/nav.scss";
function Nav(props) {
  return (
    <div className="gnbBox">
      <h1 className="logo">오대균 포트폴리오</h1>

      <ul className="gnb">
        <li className="gnbList">
          <Link to="/">Main</Link>
        </li>
        <li className="gnbList">
          <Link to="/Project">Project</Link>
        </li>
        <li className="gnbList">
          <Link to="/Skill">Skill</Link>
        </li>
        <li className="gnbList">
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
