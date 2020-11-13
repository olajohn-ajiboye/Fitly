import React from 'react'

export enum FastFeelingsEnum {
	GOOD = 'GOOD',
	HAPPY = 'HAPPY',
	SAD = 'SAD',
}
const feelings = [
	{ key: FastFeelingsEnum.HAPPY, value: '😍' },
	{
		key: FastFeelingsEnum.GOOD,
		value: '😃',
	},
	{ key: FastFeelingsEnum.SAD, value: '😞' },
]

interface FeelingProps {
	onSelectFeeling: (feeling: FastFeelingsEnum) => void
}
export function Feeling({ onSelectFeeling }: FeelingProps) {
	return (
		<div>
			<h5>How are you feeling?</h5>
			{feelings.map(({ key, value }) => {
				return (
					<span className="feeling" onClick={() => onSelectFeeling(key)} key={key}>
						{value}
					</span>
				)
			})}
		</div>
	)
}
