import { FastFeelingsEnum } from '.././Feeling'

type Action =
	| { type: 'startFast'; start: Date | number }
	| { type: 'endFast'; end: Date | number }
	| { type: 'addFeeling'; feeling: FastFeelingsEnum }
	| { type: 'reset' }

export interface FastState {
	start_time: Date | number | null
	end_time: Date | number | null
	feeling: FastFeelingsEnum | null
	started: boolean
}

export const initialFastState: FastState = {
	start_time: null,
	end_time: null,
	feeling: null,
	started: false,
}

// const setInlocalStorage = (fast: FastState) => localStorage.setItem('fast', JSON.stringify(fast))
// const getInlocalStorage = (value: string): FastState => JSON.parse(localStorage.getItem('fast') || '')?.value
// const removeFromLocalStorage = () => localStorage.removeItem('fast')

export function fastReducer(state: FastState, action: Action): FastState {
	switch (action.type) {
		case 'startFast':
			return {
				...state,
				start_time: action.start,
				started: true,
			}
		case 'endFast':
			return {
				...state,
				end_time: action.end,
				start_time: null,
				started: false,
			}
		case 'addFeeling':
			return {
				...state,
				feeling: action.feeling,
			}
		case 'reset':
			return {
				...initialFastState,
			}
		default:
			return state
	}
}
