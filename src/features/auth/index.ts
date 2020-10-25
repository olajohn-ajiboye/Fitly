import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "../../app/store";
import { CurrentUser, loginWithPop, signOut } from "../../services/firestore";

interface AuthState {
  isAuth: boolean;
  currentUser?: CurrentUser;
}

const initialState: AuthState = {
  isAuth: false,
  currentUser: undefined,
};

export const login = createAsyncThunk("auth/loginAsync", async () => {
  const currentUser = await loginWithPop();
  return currentUser;
});

export const logOut = createAsyncThunk("auth/logOutAsync", async () => {
  return await signOut();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state) => {
    //   const currentUser = loginWithPop() as any;
    //   console.log(currentUser);
    //   state.isAuth = true;
    //   state.currentUser = currentUser;
    // },
    // logOut: (state) => {
    //   signOut();
    //   state.isAuth = false;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // // incrementByAmount: (state, action: PayloadAction<number>) => {
    // //   state.isAuth += action.payload;
    // // },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [login.fulfilled.toString()]: (
      state,
      action: PayloadAction<CurrentUser>
    ) => {
      // Add user to the state array
      const { displayName, email, photoURL } = action.payload;
      state.currentUser = { displayName, email, photoURL };
      state.isAuth = true;
    },
    [logOut.fulfilled.toString()]: (state, action) => {
      // Add user to the state array
      state.isAuth = false;
    },
  },
});

export const {} = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const loginAsync = (): AppThunk => (dispatch) => {
//   dispatch(login());
// };

// export const logOutAsync = (): AppThunk => (dispatch) => {
//   dispatch(logOut());
// };

// The function below is called a selector and allows us to select a isAuth from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.isAuth)`
export const isAuth = (state: RootState) => state.auth.isAuth;
export const currentUser = (state: RootState) => state.auth.currentUser;
export default authSlice.reducer;
