import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { RootState } from '../../app/rootReducer';
import { CurrentUser, loginWithPop, signOut } from '../../services/firestore';
import { useLocalStorage } from '../../app/hooks/useLocalStorage';

interface AuthState {
  isAuth: boolean;
  currentUser: CurrentUser | null;
}

const initialState: AuthState = {
  isAuth: false,
  currentUser: {
    displayName: '',
    email: '',
    photoURL: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<CurrentUser>) => {
      const { displayName, email, photoURL } = action.payload;
      state.currentUser = { displayName, email, photoURL };
      state.isAuth = true;
    },
    logOut: (state) => {
      state.isAuth = false;
      state.currentUser = null;
    },
    getCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.currentUser = action.payload;
      if (action.payload.displayName) {
        state.isAuth = true;
      }
    },
  },
});

export const { getCurrentUser, login, logOut } = authSlice.actions;

export const loginAsync = (): AppThunk => async (dispatch) => {
  try {
    const currentUser = await loginWithPop();
    const { setItem } = useLocalStorage<CurrentUser>('user', currentUser);
    setItem();
    dispatch(login(currentUser));
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUserAsync = (): AppThunk => async (dispatch) => {
  try {
    const { getItem } = useLocalStorage<CurrentUser>('user');
    const user = getCurrentUser(getItem());
    dispatch(user);
  } catch (error) {
    console.log(error);
  }
};

export const logOutAsync = (): AppThunk => async (dispatch) => {
  try {
    await signOut();
    const { removeItem } = useLocalStorage<CurrentUser>('user');
    removeItem();
    dispatch(logOut());
  } catch (error) {
    console.log(error);
  }
};

export const isAuth = (state: RootState) => state.auth.isAuth;
export const currentUser = (state: RootState) => state.auth.currentUser;
export default authSlice.reducer;
