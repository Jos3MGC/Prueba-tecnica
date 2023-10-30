"use client";

import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function useLogin(initialState: any) {
  const [dataLogin, setDataLogin] = useState(initialState);

  const { username, password } = dataLogin;
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = ({ target }: { target: HTMLInputElement }) => {
    const { value, name } = target;
    switch (name) {
      default:
        setDataLogin({
          ...dataLogin,
          [name]: value,
        });
        break;
    }
  };

  const onClickLogin = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      alert("Error");
      return;
    }
    dispatch(logIn({ username, password }));
  };
  const onClickToggle = () => {};
  const onClickLogOut = () => {};

  return {
    username,
    password,
    handleOnChange,
    onClickLogin,
    onClickToggle,
    onClickLogOut,
  };
}
