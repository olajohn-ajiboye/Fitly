import { useEffect } from 'react'

interface Weight {
	value: number
	entry_date: string
}
interface WeightDifferential {
	by: number
	isDown: boolean
	previousWeight: number
	currentWeight: number
}

export default function useWeightDifference(): WeightDifferential {
	return {
		by: 0.5,
		isDown: true,
		previousWeight: 90,
		currentWeight: 95,
	}
}
