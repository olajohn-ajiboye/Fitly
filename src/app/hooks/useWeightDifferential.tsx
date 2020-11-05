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

export default function useWeightDifferential(weights: Weight[] | undefined): WeightDifferential | null {
	if (weights == null || weights === undefined) return null
	const [current, prev] = weights
	const by = current?.value - prev?.value
	return {
		by,
		isDown: Boolean(by),
		previousWeight: prev?.value,
		currentWeight: current?.value,
	}
}
