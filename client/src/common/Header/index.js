import React from "react";
import HeaderLogo from "./Component/HeaderLogo/";
import HeaderNavigation from "./Component/HeaderNavigation/";
import HeaderLoginSignup from "./Component/HeaderLoginSignup/";
import HeaderSearch from "./Component/HeaderSearch/";
const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="hold-container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <HeaderLogo />
          <HeaderNavigation />
          {/* <div className="nav-n-log"> */}
          <HeaderSearch />
          {/* </div> */}
          <HeaderLoginSignup />
        </div>
      </div>
    </header>
  );
};
export default Header;