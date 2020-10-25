import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../../app/store";
import { RootState } from "../../app/rootReducer";
import { CurrentUser, loginWithPop, signOut } from "../../services/firestore";

interface AuthState {
  isAuth: boolean;
  currentUser: CurrentUser;
}

const initialState: AuthState = {
  isAuth: false,
  currentUser: {
    displayName: "",
    email: "",
    photoURL: "",
  },
};

// export const login = createAsyncThunk("auth/login", async () => {
//   const currentUser = await loginWithPop();
//   return currentUser;
// });

// export const logOut = createAsyncThunk("auth/logOut", async () => {
//   return await signOut();
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<CurrentUser>) => {
      const { displayName, email, photoURL } = action.payload;
      state.currentUser = { displayName, email, photoURL };
      state.isAuth = true;
      console.log(state.currentUser);
    },
    logOut: (state) => {
      state.isAuth = false;
      console.log(state.currentUser);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.isAuth += action.payload;
    // },
  },
  //   extraReducers: {
  //     // Add reducers for additional action types here, and handle loading state as needed
  //     [login.fulfilled.toString()]: (
  //       state,
  //       action: PayloadAction<CurrentUser>
  //     ) => {
  //       // Add user to the state array
  //       const { displayName, email, photoURL } = action.payload;
  //       state.currentUser = { displayName, email, photoURL };
  //       state.isAuth = true;
  //     },
  //     [logOut.fulfilled.toString()]: (state, action) => {
  //       // Add user to the state array
  //       state.isAuth = false;
  //     },
  //   },
});

export const { login, logOut } = authSlice.actions;

export const loginAsync = (): AppThunk => async (dispatch) => {
  try {
    const currentUser = await loginWithPop();
    dispatch(login(currentUser));
  } catch (error) {
    console.log(error);
  }
};

export const logOutAsync = (): AppThunk => async (dispatch) => {
  try {
    await signOut();
    dispatch(logOut());
  } catch (error) {
    console.log(error);
  }
};

export const isAuth = (state: RootState) => state.auth.isAuth;
export const currentUser = (state: RootState) => state.auth.currentUser;
export default authSlice.reducer;
