import { useEffect } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useQuery } from '@apollo/client'

import { AppThunk } from '../../app/store'
import { RootState } from '../../app/rootReducer'
import { addFast_insert_fitly_fast_one } from '../../graphql/mutations/types/addFast'

import { GET_CURRENT_WEIGHT } from '../../graphql/queries'
import {
	getCurrentWeight as getCurrentWeightQuery,
	getCurrentWeightVariables,
} from '../../graphql/queries/types/getCurrentWeight'

export type Fast = Omit<addFast_insert_fitly_fast_one, '__typename' | 'id'>
interface DayData {
	fast: Fast
	weight: number
}

const initialState: DayData = {
	fast: {
		end_time: '',
		feeling: '',
		start_time: '',
		user_id: '',
	},
	weight: 90,
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
		getCurrentWeight: (state, action: PayloadAction<number>) => {
			state.weight = action.payload
		},
	},
})

export const { addNewFast, addNewWeight, getCurrentWeight } = dayDataSlice.actions

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

export const getCurrentWeightAsync = ({ user_id, entry_date }: getCurrentWeightVariables): AppThunk => async (
	dispatch
) => {
	try {
		const { data, refetch } = useQuery<getCurrentWeightQuery, getCurrentWeightVariables>(GET_CURRENT_WEIGHT, {
			variables: {
				user_id,
				entry_date,
			},
		})

		useEffect(() => {
			refetch()
		}, [dispatch, refetch])

		dispatch(getCurrentWeight(data?.fitly_weight[0].value ?? initialState.weight))
	} catch (error) {
		console.log(error)
	}
}

export const fastData = (state: RootState) => state.dayData.fast
export const weight = (state: RootState) => state.dayData.weight

export default dayDataSlice.reducer
