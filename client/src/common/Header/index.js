import React,{useState, useEffect} from "react";
import HeaderLogo from "./Component/HeaderLogo/";
import HeaderNavigation from "./Component/HeaderNavigation/";
import HeaderLoginSignup from "./Component/HeaderLoginSignup/";
import HeaderSearch from "./Component/HeaderSearch/";
const Header = () => {
  const logedInUser = localStorage.userInfo;
  
  const [hasLogedInUser, setHasLogedInUser] = useState(false)
  useEffect(()=>{
    if(logedInUser){
      setHasLogedInUser(true);
    }
    else{
      setHasLogedInUser(false);
    }
  },[logedInUser]);
  return (
    <header className="p-3 bg-dark text-white">
      <div className="hold-container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <HeaderLogo />
          <HeaderNavigation />
          {/* <div className="nav-n-log"> */}
          <HeaderSearch />
          {/* </div> */}
          <HeaderLoginSignup hasLogedInUser={hasLogedInUser} />
        </div>
      </div>
    </header>
  );
};
export default Header;