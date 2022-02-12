import React, {FC, useEffect} from 'react';
import NavbarComponent from "../components/NavbarComponent";
import {useAppDispatch, useAppSelector} from "../hooks";
import {Route, Routes} from "react-router-dom";
import AuthPage from "./AuthPage";
import storage from "../utils/storage";
import {setUser} from "../store/slices/authSlice";
import HomePage from "./HomePage";
import ChangePasswordPage from "./ChangePasswordPage";

const AppPage: FC = () => {
  const {isAuth} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = storage.get('token')
    const user = storage.get('user');
    user && token && dispatch(setUser({user, token}));
  }, []);

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        {isAuth ? (
          <Route path={'/change_password'} element={<ChangePasswordPage/>}/>
        ) : (
          <>
            <Route path={'/register'} element={<AuthPage/>}/>
            <Route path={'/login'} element={<AuthPage/>}/>
          </>
        )}
      </Routes>
    </>
  );
};

export default AppPage;
