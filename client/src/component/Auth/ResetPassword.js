import React from "react";
const ResetPassword = () => {
  return (
    <div className="sign-wrapper">
      <div className="sign-holder">
        <div className="sign-box forgetpassword">
          <p>
            Enter your email address you're using for your account below and we
            will send you a password reset link.
          </p>
          <div class="row mb-3">
                <label for="userPass" class="col-form-label">
                  New Password
                </label>
                <div>
                  <input
                    type="password"
                    class="form-control"
                    id="userPass"
                    placeholder="Your Password"
                  />
                </div>
          </div>
          <div class="row mb-3">
                <label for="userPass" class="col-form-label">
                    Confirm New Password
                </label>
                <div>
                  <input
                    type="password"
                    class="form-control"
                    id="userPass"
                    placeholder="Your Password"
                  />
                </div>
          </div>
          <div class="row mb-3">
            <div className="btn-group  mb-3">
              <a href="/feed" className="btn btn-warning">
                {" "}
                Request Reset Link{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="sign-box forgetpassword">
          <h2>Password Changed!</h2>
          <p>
            <span className='link-text'>Please click here to continue with <a href="" class="link-fp">techCore</a></span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
