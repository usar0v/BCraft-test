import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {useNavigate} from "react-router-dom";
import {Button, PageHeader} from "antd";
import {signOut} from "../store/slices/authSlice";

const NavbarComponent: FC = () => {
  const {isAuth} = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="BCraft"
        subTitle="Тестовое задание: Usarov"
        extra={!isAuth ? [
            <Button onClick={() => navigate('/login')} key="2">Войти</Button>,
            <Button onClick={() => navigate('/register')} key="1">Регистрация</Button>] :
          [<Button onClick={() => navigate('/change_password')} key="3">Изменить пароль</Button>,
            <Button onClick={() => dispatch(signOut())} key="5">Выйти</Button>]}
      />
    </>
  );
};

export default NavbarComponent;
