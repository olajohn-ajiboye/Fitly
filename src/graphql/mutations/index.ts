import { gql } from '@apollo/client'

export const UPSERT_FAST = gql`
	mutation upsertFast(
		$id: String
		$start_time: timestamp!
		$user_id: uuid!
		$entry_date: date!
		$end_time: timestamptz
		$feeling: String
	) {
		insert_fitly_fast(
			objects: {
				id: $id
				end_time: $end_time
				entry_date: $entry_date
				feeling: $feeling
				start_time: $start_time
				user_id: $user_id
			}
			on_conflict: {
				constraint: fast_pkey
				update_columns: [start_time, feeling, end_time]
				where: { id: { _eq: $id }, entry_date: { _eq: $entry_date } }
			}
		) {
			returning {
				id
				user_id
				start_time
				end_time
				entry_date
				feeling
			}
		}
	}
`

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

export const UPDATE_FAST = gql`
	mutation updateFast($id: String!, $end_time: timestamptz, $feeling: String, $start_time: timestamp) {
		update_fitly_fast_by_pk(
			pk_columns: { id: $id }
			_set: { end_time: $end_time, feeling: $feeling, start_time: $start_time }
		) {
			id
			end_time
			entry_date
			start_time
			feeling
		}
	}
`
