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
	mutation upsertWeight($weight: float8!, $user_id: uuid!, $entry_date: date!) {
		insert_fitly_weight_one(
			object: { entry_date: $entry_date, user_id: $user_id, value: $weight }
			on_conflict: { constraint: entry_date, update_columns: entry_date }
		) {
			value
			user_id
			entry_date
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
