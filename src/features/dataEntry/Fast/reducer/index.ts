import { FastFeelingsEnum } from '.././Feeling'

type Action =
	| { type: 'startFast'; start: string }
	| { type: 'endFast'; end: string }
	| { type: 'addFeeling'; feeling: FastFeelingsEnum }

interface FastState {
	start_time: string | null
	end_time: string | null
	feeling: FastFeelingsEnum | null
}

export const initialFastState = {
	start_time: null,
	end_time: null,
	feeling: null,
}

export function fastReducer(state: FastState, action: Action): FastState {
	switch (action.type) {
		case 'startFast':
			return {
				...state,
				start_time: action.start,
			}
		case 'endFast':
			return {
				...state,
				end_time: action.end,
			}
		case 'addFeeling':
			return {
				...state,
				feeling: action.feeling,
			}
		default:
			return state
	}
}
