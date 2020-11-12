// import { useEffect, useState } from 'react'
// import { useMutation } from '@apollo/client'
// import { UPSERT_CURRENT_USER } from '../../graphql/mutations'
// import { loginWithPop, CurrentUser } from '../../services/firestore'

// import {
// 	upsertCurrentUser_insert_fitly_user_one as upsertCurrentUserMutation,
// 	upsertCurrentUserVariables,
// } from '../../graphql/mutations/types/upsertCurrentUser'

// // check if user already exists in firebase
// // if yes just store the auth session with user info in local storage
// // if no automatically register new user in firebase and then store into firebase
// export const useLoginAuth = () => {
// 	const [firebaseUser, setFirebaseUser] = useState<CurrentUser | null>()

// 	const [upsertCurrentUser, { data }] = useMutation<upsertCurrentUserMutation, upsertCurrentUserVariables>(
// 		UPSERT_CURRENT_USER,
// 		{
// 			variables: { ...firebaseUser },
// 		}
// 	)
// 	console.log('data', data)
// 	console.log(firebaseUser)
// 	useEffect(() => {
// 		upsertCurrentUser()
// 	}, [])
// 	return { data }
// }

export {}
