import React, {FC} from 'react';
import {useLocation} from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";
import LoginComponent from "../components/LoginComponent";

const AuthPage: FC = () => {
  const {pathname} = useLocation();

  return (
    <>
      {pathname === '/register' ? (
        <RegisterComponent/>
      ) : (
        <LoginComponent/>
      )}
    </>
  );
};

export default AuthPage;
