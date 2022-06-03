import React from "react";
import { Link } from "react-router-dom";
const HeaderLoginSignupButton = () => {
  return (
    <div className="text-end">
      {/* <button type="button" className="btn btn-outline-light me-2">
            Login
          </button>
          <button type="button" className="btn btn-warning">
            Sign-up
          </button> */}
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        {/* <Link to="/" className="btn btn-outline-light">Login</Link>
        <Link to="/" className="btn btn-warning">Signup</Link> */}
        <a href="/signin" className="btn btn-outline-light">Login</a>
        <a href="/signup" className="btn btn-warning">Sign Up</a>
        {/* <button type="button" className="btn btn-outline-light">
          Login
        </button>
        <button type="button" className="btn btn-warning">
          Signup
        </button> */}
      </div>
    </div>
  );
};
export default HeaderLoginSignupButton;