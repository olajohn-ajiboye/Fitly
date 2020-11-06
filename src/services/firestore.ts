import * as firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const { REACT_APP_FIREBASE_API_KEY, REACT_APP_AUTH_DOMAIN } = process.env

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_AUTH_DOMAIN,
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
	id?: string
	display_name: string | null
	email: string | null
	photo_url: string | null
	uid: string | null
}

export interface FirebaseUser {
	displayName: string | null
	email: string | null
	photoURL: string | null
	uid: string
}

export const loginWithPop = async (): Promise<FirebaseUser> => {
	try {
		await firebase.auth().signInWithPopup(provider)
		const { displayName, email, photoURL, uid } = firebase.auth().currentUser!
		return { displayName, email, photoURL, uid }
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
