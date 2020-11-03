import { gql } from '@apollo/client'

export const GET_FAST = gql`
	query getUser {
		fitly_fast {
			id
			user_id
			feeling
		}
		fitly_user(where: { id: { _eq: "6c1e05a7-8339-4a29-9a86-715a4e5ea14c" } }) {
			display_name
		}
	}
`

export const GET_CURRENT_WEIGHT = gql`
	query getCurrentWeight($user_id: uuid!, $entry_date: date!) {
		fitly_weight(where: { user_id: { _eq: $user_id }, entry_date: { _eq: $entry_date } }) {
			value
		}
	}
`
