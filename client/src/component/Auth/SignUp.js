import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom";
const USER_TEMPLATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  userName: "",
  password: "",
  confirmPassword: "",
  agreeOnTerms: false,
};

const SignUp = () => {
  const [userRegistration, setUserRegistration] = useState(USER_TEMPLATE);

  const [user, setUser] = useState([]);

  const [isUserAdded, setIsUserAdded] = useState(false);
  //const {firstName, lastName, email, phone, userName, password, confirmPassword, agreeOnTerms} = user;
  const handleInput = (e) => {
    /* Method 01 */
    // const {name, value} = e.target;
    // const userObj = {...user};
    // userObj[name]=value;
    // setUserRegistration(userObj);

    /* Method 02 */
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, " : ", value);
    setUserRegistration({ ...userRegistration, [name]: value });
    //console.log("[name] : ", [name], " : ", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };

    // console.log(user);
    // setUser([...user, newUser]);
    // console.log(user);

    if(newUser!=""){
    axios
      .post("/api/user/adduser", newUser)
      .then((res) => {
        const { data } = res;
        const { isUserAdded } = data;
        if (isUserAdded) {
          setIsUserAdded(isUserAdded);
        }
        setUser([...user, newUser]);
        setUserRegistration(USER_TEMPLATE);
      })
      .then((err) => {
        console.log(err);
      });
    }
    //setUserRegistration(USER_TEMPLATE);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserRegistration(USER_TEMPLATE);
  }

  if(isUserAdded){
    return(
      <div className="msg-feed-curd">
        <aside className="heading">
          <h6>The user has been added successfully.</h6>
          <p>You can proceed for login.</p>
          <div className="btn-box">
            <Link to="/signin" className="btn btn-primary">Login</Link>
          </div>
        </aside>
      </div>
    )
  }
  return (
    <div className="sign-wrapper">
      <div className="sign-holder">
        <div className="sign-box up">
          <div className="row mb-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="col-form-label">
                First Name
              </label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name."
                  autoComplete="off"
                  onChange={handleInput}
                  value={userRegistration.firstName}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="col-form-label">
                Last Name
              </label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name."
                  autoComplete="off"
                  onChange={handleInput}
                  value={userRegistration.lastName}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <div>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your email id."
                autoComplete="off"
                onChange={handleInput}
                value={userRegistration.email}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="phone" className="col-form-label">
              Phone
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Your phone number."
                autoComplete="off"
                onChange={handleInput}
                value={userRegistration.phone}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="userName" className="col-form-label">
              User Name
            </label>
            <div>
              <input
                type="email"
                className="form-control"
                id="userName"
                name="userName"
                placeholder="Your user name."
                autoComplete="off"
                onChange={handleInput}
                value={userRegistration.userName}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <div>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="New password"
                autoComplete="off"
                onChange={handleInput}
                value={userRegistration.password}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="confirmPassword" className="col-form-label">
              Confirm Password
            </label>
            <div>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                autoComplete="off"
                onChange={handleInput}
                value={userRegistration.confirmPassword}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="agreeOnTerms"
                name="agreeOnTerms"
                onChange={handleInput}
                value={userRegistration.agreeOnTerms}
              />
              <label className="form-check-label" htmlFor="agreeOnTerms">
                I agree to the{" "}
                <a href="" className="link-fp">
                  Terms
                </a>
              </label>
            </div>
            <div className="col">
              <span className="link-text">
                Already registered? 
                <a href="/signin" className="link-fp">
                  Sign In
                </a>
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="btn-group">
              <button className="btn btn-warning" onClick={handleSubmit}>
                Sign Up
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="container inserted-record">
          {user.map((currentUser) => {
            const {
              id,
              firstName,
              lastName,
              email,
              phone,
              userName,
              password,
              agreeOnTerms,
            } = currentUser;
            return (
              <div className="row align-items-start" key={id}>
                <div className="col">{id}</div>
                <div className="col">{firstName}</div>
                <div className="col">{lastName}</div>
                <div className="col">{email}</div>
                <div className="col">{phone}</div>
                <div className="col">{userName}</div>
                <div className="col">{password}</div>
                <div className="col">{agreeOnTerms}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SignUp;