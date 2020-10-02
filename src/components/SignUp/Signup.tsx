import React from "react";
import "./signup.styles.scss";

export interface SignupPageProps {}

const SignupPage: React.SFC<SignupPageProps> = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6 signup"></div>
        <div className="col-6">
          <div className="signup-container">
            <div className="container">
              <h3>Sign Up</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputUsername1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername1"
                    placeholder="username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="email"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword2" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="confirm password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
