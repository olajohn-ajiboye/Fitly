import { FastFeelingsEnum } from '.././Feeling'

type Action =
	| { type: 'startFast'; start: number }
	| { type: 'endFast'; end: number }
	| { type: 'addFeeling'; feeling: FastFeelingsEnum }
	| { type: 'reset' }

export interface FastState {
	start_time: number | null
	end_time: number | null
	feeling: FastFeelingsEnum | null
	started: boolean
}

export const initialFastState: FastState = {
	start_time: null,
	end_time: null,
	feeling: null,
	started: false,
}

const setInlocalStorage = (fast: FastState) => localStorage.setItem('fast', JSON.stringify(fast))

export function fastReducer(state: FastState, action: Action): FastState {
	switch (action.type) {
		case 'startFast':
			const startState = {
				...state,
				start_time: action.start,
				started: true,
			}
			setInlocalStorage(startState)
			return startState
		case 'endFast':
			const endState = {
				...state,
				end_time: action.end,
				start_time: null,
				started: false,
			}
			setInlocalStorage(endState)
			return endState
		case 'addFeeling':
			const add = {
				...state,
				feeling: action.feeling,
			}
			setInlocalStorage(add)
			return add
		case 'reset':
			return {
				...initialFastState,
			}
		default:
			return state
	}
}
