import React from "react";
// import {
//   Link
// } from "react-router-dom";
const HeaderNavItem = ({ text, linkPath, toggleClass }) => {
  return (
    <li>
      {/* <a href="#" className="nav-link selective">{text}</a> */}
      {/* <Link className="nav-link" to={linkPath}>{text}</Link> */}
      <a href={linkPath} className={"nav-link "+ toggleClass}>{text}</a>
    </li>
  );
};
export default HeaderNavItem;