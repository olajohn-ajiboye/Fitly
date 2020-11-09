import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory, useLocation, Redirect } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { UPSERT_CURRENT_USER } from '../graphql/mutations'

import google from '../assets/google.png'
import Icon from '../components/Styled/Icons'

import { loginAsync, getCurrentUserAsync, isAuth } from '../features/auth/index'
import { loginWithPop, CurrentUser } from '../services/firestore'

import { upsertCurrentUser as upsertCurrentUserMutation } from '../graphql/mutations/types/upsertCurrentUser'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginTop: 50,
			'& img': {
				marginRight: 30,
			},
		},
		button: {
			width: 300,
		},
	})
)

const defaultUser = { id: '', display_name: '', email: '', photo_url: '', uid: '' }

export default function LoginPage() {
	const { root, button } = useStyles()
	const auth = useSelector(isAuth)
	const [firebaseUser, setUser] = useState<CurrentUser>(defaultUser)

	const dispatch = useDispatch()
	let history = useHistory()
	let location = useLocation() as any

	const [upsertCurrentUser] = useMutation<upsertCurrentUserMutation, CurrentUser>(UPSERT_CURRENT_USER, {
		variables: firebaseUser,
	})

	let { from } = location.state || { from: { pathname: '/' } }

	const login = async () => {
		try {
			const userFromFirebase = await loginWithPop()
			setUser({
				display_name: userFromFirebase?.displayName,
				uid: userFromFirebase?.uid,
				photo_url: userFromFirebase.photoURL,
				email: userFromFirebase.email,
			})
			const { data } = await upsertCurrentUser()
			const currentUser = data?.insert_fitly_user_one ?? defaultUser
			dispatch(loginAsync(currentUser))
			history.replace(from)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		dispatch(getCurrentUserAsync())
	}, [dispatch])

	return auth ? (
		<Redirect
			to={{
				pathname: '/',
			}}
		/>
	) : (
		<Grid container justify="center" className={root}>
			<Paper>
				<Grid item>
					<Button className={button} onClick={() => login()}>
						{' '}
						<Icon src={google} alt="login button" /> Sign in
					</Button>
				</Grid>
			</Paper>
		</Grid>
	)
}
