"use client";

import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { regularEx } from "@/helpers/regularExpresions";
import Swal from 'sweetalert2'
import { authenticate } from "@/models/loginModel";

interface LoginData {
  username: string,
  password: string
}

export default function useLogin(initialState: LoginData) {

  const [dataLogin, setDataLogin] = useState(initialState);
  const [check, setCheck] = useState(0);
  const [showLogin, setShowLogin] = useState(true);

  const { username, password } = dataLogin;
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      default:
        setDataLogin({
          ...dataLogin,
          [name]: value,
        });
        break;
    }
  };

  const handleMessage = (text: string) => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const onClickLogin = () => {
    if (username.trim().length === 0) {
      handleMessage('¡Upss! No puede ir vacío el email');
      return;
    }
    if (!regularEx.emailTest.test(username)) {
      handleMessage('¡Upss! Ingrese un correo válido');
      return;
    }
    if (password.trim().length === 0) {
      handleMessage('¡Upss! No puede ir vacío la contraseña');
      return;
    }
    authenticate(username, password).then(response => {
      if (response?.status === 200) {
        let token = response.data;
        dispatch(logIn({ username, token }));
        setDataLogin(initialState);
      } else {
        handleMessage('¡Upss! La contraseña y/o usuario no es correcta');
        return;
      }
    })
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  const handleClick = () => {
    if (check === 0) {
      setCheck(1);
      setShowLogin(false);
    } else {
      setCheck(0);
      setShowLogin(true);
    }
  };

  const isLoggin = useAppSelector((state) => state.authReducer.value.isAuth);

  return {
    username,
    password,
    handleOnChange,
    onClickLogin,
    onClickLogOut,
    isLoggin,
    handleClick,
    showLogin,
    check
  };

}
