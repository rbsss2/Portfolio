import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "../styles/nav.scss";
function Nav(props) {
  return (
    <div className="gnbBox">
      <h1 className="logo">오대균 포트폴리오</h1>

      <ul className="gnb">
        <li className="gnbList">Main</li>
        <li className="gnbList">Project</li>
        <li className="gnbList">Skill</li>
        <li className="gnbList">About</li>
      </ul>
    </div>
  );
}

export default Nav;
