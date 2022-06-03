import React from "react";
const ForgetPassword = () => {
  return (
    <div className="sign-wrapper">
      <div className="sign-holder">
        <div className="sign-box forgetpassword">
          <p>
            Enter your email address you're using for your account below and we
            will send you a password reset link.
          </p>
          <div class="row mb-3">
            <label for="userName" class="col-form-label">
              Email
            </label>
            <div>
              <input
                type="email"
                class="form-control"
                id="userName"
                placeholder="Your User name"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div className="btn-group  mb-3">
              <a href="/feed" className="btn btn-warning">
                {" "}
                Request Reset Link{" "}
              </a>
              <a href="/about" className="btn btn-secondary">
                {" "}
                Back Sign Up{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="sign-box forgetpassword">
          <h2>Thank you!</h2>
          <p>Please check your email.</p>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
