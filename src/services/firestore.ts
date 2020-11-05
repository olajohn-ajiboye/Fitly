import * as firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const { REACT_APP_FIREBASE_API_KEY, REACT_APP_DATABASE_URL } = process.env

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_DATABASE_URL,
	databaseURL: '',
	projectId: 'fitly-85a63',
	storageBucket: 'fitly-85a63.appspot.com',
	messagingSenderId: '258186707545',
	appId: '1:258186707545:web:6244c2133bfcbde0152748',
	measurementId: 'G-5MWY6JZ07C',
}

firebase.initializeApp(firebaseConfig)

var provider = new firebase.auth.GoogleAuthProvider()

export interface CurrentUser {
	displayName: string | null
	email: string | null
	photoURL: string | null
}

export const loginWithPop = async (): Promise<CurrentUser> => {
	try {
		await firebase.auth().signInWithPopup(provider)
		const { displayName, email, photoURL } = firebase.auth().currentUser!
		return { displayName, email, photoURL }
	} catch (error) {
		console.warn(error)
		return error
	}
}

export const signOut = async () => {
	try {
		await firebase.auth().signOut()
	} catch (error) {
		console.warn(error)
		return error
	}
}

export { firebase }
