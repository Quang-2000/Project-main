import React from "react";
import Footerr from "../../../components/layout/Footerr";
import RegisterForm from "../../../modules/SignIn/components/RegisterForm";
import Headerr from "../../../components/layout/Headerr";
import NavBarr from "../../../components/layout/NavBarr";
const RegisterPage = () => {
  return (
    <div>
      <Headerr />
      <NavBarr />
      <RegisterForm />
      <Footerr />
    </div>
  );
};

export default RegisterPage;
