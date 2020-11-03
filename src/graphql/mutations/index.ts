import { gql } from '@apollo/client'

export const ADD_FAST = gql`
	mutation addFast {
		insert_fitly_fast_one(
			object: {
				end_time: "2020-10-31T22:44:10.35273"
				feeling: "HAPPY"
				start_time: "2020-10-31T22:44:10.35273"
				user_id: "d64d5a75-edf3-4127-8183-6a02f638a31c"
			}
		) {
			end_time
			feeling
			id
			start_time
			user_id
		}
	}
`

export const UPDATE_WEIGHT = gql`
	mutation updateWeight($weight: float8!, $user_id: uuid!, $entry_date: date!) {
		update_fitly_weight(
			where: { entry_date: { _eq: $entry_date }, user_id: { _eq: $user_id } }
			_set: { value: $weight }
		) {
			returning {
				value
			}
		}
	}
`
