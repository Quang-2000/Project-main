import React from "react";
import LoginForm from "../../../modules/SignIn/components/LoginForm";
import Footerr from "../../../components/layout/Footerr";
import Headerr from "../../../components/layout/Headerr";
import NavBarr from "../../../components/layout/NavBarr";

const LoginPage = () => {
  return (
    <div>
      <Headerr />
      <NavBarr />
      <LoginForm />
      <Footerr />
    </div>
  );
};

export default LoginPage;
