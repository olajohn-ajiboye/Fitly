import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from '../../app/store'
import { RootState } from '../../app/rootReducer'
import { CurrentUser, signOut } from '../../services/firestore'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export interface AuthState {
	isAuth: boolean
	currentUser: CurrentUser | null
}

export const initialState: AuthState = {
	isAuth: false,
	currentUser: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<CurrentUser>) => {
			const { display_name, email, photo_url, uid, id } = action.payload
			state.currentUser = { display_name, email, photo_url, uid, id }
			state.isAuth = true
		},
		logOut: (state) => {
			state.isAuth = false
			state.currentUser = null
		},
		getCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
			state.currentUser = action.payload
			if (action.payload.display_name) {
				state.isAuth = true
			}
		},
	},
})

export const { getCurrentUser, login, logOut } = authSlice.actions

export const loginAsync = (currentUser: CurrentUser): AppThunk => async (dispatch) => {
	try {
		const { setItem } = useLocalStorage<CurrentUser>('user', currentUser)
		setItem()
		dispatch(login(currentUser))
	} catch (error) {
		console.log(error)
	}
}

export const getCurrentUserAsync = (): AppThunk => async (dispatch) => {
	try {
		const { getItem } = useLocalStorage<CurrentUser>('user')
		const user = getCurrentUser(getItem())
		dispatch(user)
	} catch (error) {
		console.log(error)
	}
}

export const logOutAsync = (): AppThunk => async (dispatch) => {
	try {
		await signOut()
		const { removeItem } = useLocalStorage<CurrentUser>('user')
		removeItem()

		dispatch(logOut())
	} catch (error) {
		console.log(error)
	}
}

export const isAuth = (state: RootState) => state.auth.isAuth
export const currentUser = (state: RootState) => state.auth.currentUser
export default authSlice.reducer
