import { gql } from '@apollo/client'

export const GET_FAST = gql`
	query getFasting($id: String!) {
		fitly_fast_by_pk(id: $id) {
			end_time
			entry_date
			feeling
			id
			start_time
			user_id
		}
	}
`

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
