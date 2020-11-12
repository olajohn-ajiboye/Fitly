import { gql } from '@apollo/client'

// export const GET_FAST = gql`
// 	query getUser {
// 		fitly_fast {
// 			id
// 			user_id
// 			feeling
// 		}
// 		fitly_user(where: { id: { _eq: "6c1e05a7-8339-4a29-9a86-715a4e5ea14c" } }) {
// 			display_name
// 		}
// 	}
// `

export const GET_WEIGHT = gql`
	query getWeight($user_id: uuid!, $entry_date: date!) {
		fitly_weight(where: { _and: { user_id: { _eq: $user_id }, _and: { entry_date: { _eq: $entry_date } } } }) {
			value
			user_id
			id
			entry_date
		}
	}
`

export const GET_WEIGHTS = gql`
	query getWeights($user_id: uuid) {
		fitly_weight(where: { user_id: { _eq: $user_id } }, order_by: { entry_date: desc }) {
			value
			entry_date
		}
	}
`

export const GET_USER = gql`
	query getUser($email: String, $uid: String) {
		fitly_user(where: { uid: { _eq: $uid }, _or: { email: { _eq: $email } } }) {
			id
			uid
			display_name
			email
			photo_url
		}
	}
`
