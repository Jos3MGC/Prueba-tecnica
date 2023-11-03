import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string; //Token
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (
      state,
      action: PayloadAction<{
        username: string;
        token: string;
      }>
    ) => {
      return {
        value: {
          isAuth: true,
          username: action.payload.username,
          uid: action.payload.token,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
