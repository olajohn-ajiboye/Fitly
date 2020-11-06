import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Grid, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { useMutation } from '@apollo/client'
import { UPSERT_CURRENT_USER } from '../graphql/mutations'

import google from '../assets/google.png'
import Icon from '../components/Styled/Icons'

import { loginAsync } from '../features/auth/index'
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
	const [firebaseUser, setUser] = useState<CurrentUser>(defaultUser)
	const dispatch = useDispatch()
	const { root, button } = useStyles()

	const [upsertCurrentUser] = useMutation<upsertCurrentUserMutation, CurrentUser>(UPSERT_CURRENT_USER, {
		variables: firebaseUser,
	})

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
			await dispatch(loginAsync(currentUser))
			if (window.location.pathname.includes('/login')) {
				window.location.replace('/')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
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
