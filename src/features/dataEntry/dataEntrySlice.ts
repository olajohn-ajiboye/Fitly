import { useQuery } from '@apollo/client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { RootState } from '../../app/rootReducer'
import { AppThunk } from '../../app/store'
import { addFast_insert_fitly_fast_one } from '../../graphql/mutations/types/addFast'
import { GET_TODAYS_WEIGHT, GET_WEIGHTS } from '../../graphql/queries'
import {
	getTodaysWeight as getTodaysWeightQuery,
	getTodaysWeightVariables,
} from '../../graphql/queries/types/getTodaysWeight'

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
}

export const dayDataSlice = createSlice({
	name: 'auth',
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
		getTodaysWeight: (state, action: PayloadAction<number | undefined>) => {
			state.weight = action.payload
		},
		getWeights: (state, action: PayloadAction<DayData['allWeights']>) => {
			state.allWeights = action.payload
		},
	},
})

export const { addNewFast, addNewWeight, getTodaysWeight, getWeights } = dayDataSlice.actions

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

export const addWeightAsync = (payload: number): AppThunk => async (dispatch) => {
	try {
		dispatch(addNewWeight(payload))
	} catch (error) {
		console.log(error)
	}
}

export const getTodaysWeightAsync = ({ user_id, entry_date }: getTodaysWeightVariables): AppThunk => async (
	dispatch
) => {
	try {
		//  get weight for today
		const { data, refetch } = useQuery<getTodaysWeightQuery, getTodaysWeightVariables>(GET_TODAYS_WEIGHT, {
			variables: {
				user_id,
				entry_date,
			},
		})

		const weight = data?.fitly_weight[0]?.value
		dispatch(getTodaysWeight(weight))

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

export default dayDataSlice.reducer
