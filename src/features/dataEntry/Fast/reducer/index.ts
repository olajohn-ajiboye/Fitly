import { FastFeelingsEnum } from '.././Feeling'

type Action =
	| { type: 'startFast'; start: string }
	| { type: 'endFast'; end: string }
	| { type: 'addFeeling'; feeling: FastFeelingsEnum }
	| { type: 'reset' }

interface FastState {
	start_time: string | null
	end_time: string | null
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
