import { gql } from '@apollo/client'

// export const ADD_FAST = gql`
// 	mutation addFast {
// 		insert_fitly_fast_one(
// 			object: {
// 				end_time: "2020-10-31T22:44:10.35273"
// 				feeling: "HAPPY"
// 				start_time: "2020-10-31T22:44:10.35273"
// 				user_id: "59016c82-a4db-4877-bf39-da135c35e712"
// 			}
// 		) {
// 			end_time
// 			feeling
// 			id
// 			start_time
// 			user_id
// 		}
// 	}
// `

export const UPSERT_WEIGHT = gql`
	mutation upsertWeight($id: String, $weight: float8!, $user_id: uuid!, $entry_date: date!) {
		insert_fitly_weight(
			objects: { id: $id, entry_date: $entry_date, user_id: $user_id, value: $weight }
			on_conflict: {
				constraint: weight_pkey
				update_columns: value
				where: { user_id: { _eq: $user_id }, entry_date: { _eq: $entry_date } }
			}
		) {
			returning {
				id
				user_id
				entry_date
				value
			}
		}
	}
`

export const UPSERT_CURRENT_USER = gql`
	mutation upsertCurrentUser($display_name: String, $email: String, $uid: String!, $photo_url: String) {
		insert_fitly_user_one(
			object: { display_name: $display_name, email: $email, uid: $uid, photo_url: $photo_url }
			on_conflict: { constraint: user_email_key, update_columns: email }
		) {
			id
			display_name
			email
			uid
			photo_url
		}
	}
`

export const UPDATE_WEIGHT = gql`
	mutation updateWeight($weight: float8, $user_id: uuid) {
		update_fitly_weight(where: { user_id: { _eq: $user_id } }, _set: { value: $weight }) {
			returning {
				value
			}
		}
	}
`

export const ADD_WEIGHT = gql`
	mutation addWeight($weight: float8, $user_id: uuid, $entry_date: date) {
		insert_fitly_weight_one(object: { entry_date: $entry_date, user_id: $user_id, value: $weight }) {
			entry_date
			id
			user_id
			value
		}
	}
`
