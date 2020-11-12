import { useQuery, useMutation, DocumentNode } from '@apollo/client'
import { addWeight, addWeightVariables } from '../graphql/mutations/types/addWeight'
import { updateWeight, updateWeightVariables } from '../graphql/mutations/types/updateWeight'
import { getWeight, getWeightVariables } from '../graphql/queries/types/getWeight'

import { UPDATE_WEIGHT, ADD_WEIGHT } from '../graphql/mutations'
import { GET_WEIGHT } from '../graphql/queries'

interface UpsertMutatation {
	weight: number
	user_id: string
	entry_date: string
}

const useUpsertWeight = async ({ weight, user_id, entry_date }: UpsertMutatation) => {
	const { data, error } = await useQuery<getWeight, getWeightVariables>(GET_WEIGHT, {
		variables: {
			user_id,
			entry_date,
		},
		fetchPolicy: 'cache-first',
	})
	console.log(data)
	const [updateWeight] = await useMutation<updateWeight, updateWeightVariables>(UPDATE_WEIGHT, {
		variables: {
			weight,
			user_id,
		},
	})

	const dataObj = Object.values(data ?? [])[0]
	if (error) {
		console.log(error)
	} else if (dataObj.length) {
		return updateWeight
	}
}

export default useUpsertWeight
