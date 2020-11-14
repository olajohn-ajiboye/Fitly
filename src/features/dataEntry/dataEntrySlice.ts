import { useQuery } from '@apollo/client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { RootState } from '../../app/rootReducer'
import { AppThunk } from '../../app/store'
import { addFast_insert_fitly_fast_one } from '../../graphql/mutations/types/addFast'
import { GET_WEIGHT, GET_WEIGHTS } from '../../graphql/queries'
import { getWeight as getWeightQuery, getWeightVariables } from '../../graphql/queries/types/getWeight'

import { getWeights as getWeightsQuery, getWeightsVariables } from '../../graphql/queries/types/getWeights'

export type Fast = Omit<addFast_insert_fitly_fast_one, '__typename' | 'id'>

interface Weight {
	value: number
	entry_date: string
}
interface DayData {
	fast: Fast
	weight: number | undefined
	allWeights: Weight[] | null | undefined
	modalOpen: boolean
}

const initialState: DayData = {
	fast: {
		end_time: '',
		feeling: '',
		start_time: '',
		user_id: '',
	},
	weight: 90,
	allWeights: null,
	modalOpen: false,
}

export const dayDataSlice = createSlice({
	name: 'dayData',
	initialState,
	reducers: {
		addNewFast: (state, action: PayloadAction<Fast>) => {
			state.fast = action.payload
		},
		addNewWeight: (state, action: PayloadAction<number>) => {
			state.weight = action.payload
		},
		updateWeight: (state, action: PayloadAction<number>) => {
			state.weight = action.payload
		},
		getWeight: (state, action: PayloadAction<number | undefined>) => {
			state.weight = action.payload
		},
		getWeights: (state, action: PayloadAction<DayData['allWeights']>) => {
			state.allWeights = action.payload
		},
		showModal: (state) => {
			state.modalOpen = true
		},
		closeModal: (state) => {
			state.modalOpen = false
		},
	},
})

export const { addNewFast, addNewWeight, getWeight, getWeights, showModal, closeModal } = dayDataSlice.actions

export const addFastAsync = (payload: addFast_insert_fitly_fast_one): AppThunk => async (dispatch) => {
	try {
		const feelingUpdate = {
			...payload,
			feeling: 'SADDEST',
			start_time: 'Today',
		}
		dispatch(addNewFast(feelingUpdate))
	} catch (error) {
		console.log(error)
	}
}

export const addWeightAsync = (weight: number, user_id?: string, entry_date?: string): AppThunk => async (dispatch) => {
	try {
		dispatch(addNewWeight(weight))
	} catch (error) {
		console.log(error)
	}
}

export const getWeightAsync = ({ user_id, entry_date }: getWeightVariables): AppThunk => async (dispatch) => {
	try {
		//  get weight for today
		const { data, refetch } = useQuery<getWeightQuery, getWeightVariables>(GET_WEIGHT, {
			variables: {
				user_id,
				entry_date,
			},
			fetchPolicy: 'cache-first',
		})

		const weight = data?.fitly_weight[0]?.value
		dispatch(getWeight(weight))

		useEffect(() => {
			refetch()
		}, [dispatch, refetch])
	} catch (error) {
		console.log(error)
	}
}

export const getWeightsAsync = ({ user_id }: getWeightsVariables): AppThunk => async (dispatch) => {
	try {
		//  get weight for today
		const { data, refetch } = useQuery<getWeightsQuery, getWeightsVariables>(GET_WEIGHTS, {
			variables: {
				user_id,
			},
			fetchPolicy: 'cache-first',
		})

		const weights = data?.fitly_weight
		dispatch(getWeights(weights))

		useEffect(() => {
			refetch()
		}, [dispatch, refetch])
	} catch (error) {
		console.log(error)
	}
}

export const fastData = (state: RootState) => state.dayData.fast
export const weight = (state: RootState) => state.dayData.weight
export const allWeight = (state: RootState) => state.dayData.allWeights
export const modalOpen = (state: RootState) => state.dayData.modalOpen

export default dayDataSlice.reducer
