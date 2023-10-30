import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  password: string;
  uid: string; //Token
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    password: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<{ username: string; password: string }>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload.username,
          password: action.payload.password,
          uid: "dasdasddadsdad4d8as7d89ad77ada8d7ada",
          isModerator: false,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
