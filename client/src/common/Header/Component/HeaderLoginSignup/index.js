import React, { useState } from "react";
import UserDropDown from "./UserDropDown";
import LoginSignupButton from "./LoginSignupButton";
const HeaderLoginSignup = ({hasLogedInUser}) => {
  const userAuth = localStorage.userInfo;
  
  console.log('userAuth',userAuth);

  if(hasLogedInUser) return <UserDropDown />
  
  return <LoginSignupButton />
};
export default HeaderLoginSignup;
