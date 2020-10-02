import * as React from "react";
import Login from "../components/Login/Login";

import "./Styles/LoginPage.Styles.scss";
export interface LoginPageProps {}

const LoginPage: React.SFC<LoginPageProps> = () => {
  return (
    <div className="container">
      <Login />
    </div>
  );
};

export default LoginPage;
