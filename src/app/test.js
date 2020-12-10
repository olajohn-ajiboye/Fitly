const twoSum = (numbs, target) => {
	const numMaps = new Map()
	for (let i = 0; i < numbs.length; i++) {
		const complement = target - numbs[i]
		numMaps.set(numbs[i], i)
		if (numMaps.has(complement)) {
			return [numMaps.get(complement), i]
		}
	}
}
console.log(twoSum([3, 16, 4, 5], 9))
