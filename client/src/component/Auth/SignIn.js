import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const SIGNIN_TEMPLATE = {
  email: "",
  password: "",
  rememberMe: false,
};

const SignIn = () => {
  // const navigate = useNavigate();
  
  const params = useParams();
  const [userSignin, setUserSignin] = useState(SIGNIN_TEMPLATE);

  const handleInputs = (e) => {
    /*
    const name = e.target.name;
    const value = e.target.value;
    setUserSignin({ ...userSignin, [name] : value });*/
    // console.log("name : ", name, " | & value : ", value);

    const {name, value} = e.target;
    const newLogObj = {...userSignin}
    newLogObj[name] = value;
    // console.log("name : ", name, " & value : ", value);
    setUserSignin(newLogObj);
    // console.log(name, " : ", value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    
    //const newUser = {...userSignin};
    // useEffect(()=>{
      axios.post('api/user/getloginuser', {...userSignin}).then(
        (res) => {
          //debugger
          //console.log("userSignin :- ", userSignin)
          const { data } = res;
          const currentUser="";
          if(data.length > 0){
            //console.log("data.length :- ", data.length)
            console.log("data :- ", data)
            const LogedInUser = JSON.stringify(data);
            
            localStorage.setItem('currentUser', LogedInUser)
            // navigate.push("/home")
            // history.push("/home")
            
          }
          else{
            console.log("Not able to login.");
          }

          // console.log('\n userData.email : ', userData.email,'\n userData.password : ', userData.password, '\n userSignin.email : ', userSignin.email, '\n userSignin.password : ', userSignin.password);
        }
      ).then(
        (err) => {
          console.log(err);
        }
      );
    // },[params.email])
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserSignin(SIGNIN_TEMPLATE);
  };

  return (
    <div className="sign-wrapper">
      <div className="sign-holder">
        <div className="sign-box in">
          <div className="row mb-3">
            <label htmlFor="userName" className="col-form-label">
              User Name
            </label>
            <div>
              <input
                placeholder="Your User name"
                autoComplete="off"
                className="form-control"
                id="userName"
                type="email"
                name="email"
                onChange={handleInputs}
                value={userSignin.email}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <div>
              <input
                placeholder="Your Password"
                autoComplete="off"
                className="form-control"
                id="password"
                type="password"
                name="password"
                onChange={handleInputs}
                value={userSignin.password}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                onChange={handleInputs}
                value={userSignin.rememberMe}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className="col">
              <span className="link-text">
                <a href="/forgetpassword" className="link-fp righter">
                  Forget Password
                </a>
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="btn-group">
              <button className="btn btn-warning" onClick={handleSignin}>Sign In</button>
              <button className="btn btn-secondary" onClick={handleReset}>Cancel</button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="btn-group">
              <a href="/signup" className="btn btn-info">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;