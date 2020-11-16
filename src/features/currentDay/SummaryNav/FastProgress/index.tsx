import React from 'react'
import { buildStyles } from 'react-circular-progressbar'
import CountDownTimer from '../CountDownTimer/index'

import { StyledProgressIndicator } from '../styles'
import 'react-circular-progressbar/dist/styles.css'
import { useQuery } from '@apollo/client'
import { getFasting, getFastingVariables } from '../../../../graphql/queries/types/getFasting'
import { GET_FAST } from '../../../../graphql/queries'
import { useSelector } from 'react-redux'
import { currentUser } from '../../../auth'
import format from 'date-fns/format'

interface ProgressProps {
	value?: number
	date?: number
}

const minValue = 1
const maxValue = 18

const entry_date = format(new Date().getTime(), 'yyyy-MM-dd')
const FastProgressIndicator = () => {
	const user = useSelector(currentUser)
	const id = `${entry_date}-${user?.id}`

	const { data: fastData } = useQuery<getFasting, getFastingVariables>(GET_FAST, {
		variables: { id },
		fetchPolicy: 'cache-first',
	})

	const countdownTime =
		fastData?.fitly_fast_by_pk?.start_time && new Date(fastData?.fitly_fast_by_pk?.start_time).getTime() + 64800000

	return (
		<>
			<h1> {''}</h1>
			<StyledProgressIndicator
				value={10}
				className="fast-progress"
				minValue={minValue}
				maxValue={maxValue}
				styles={buildStyles({
					// Rotation of path and trail, in number of turns (0-1)
					rotation: 0.25,

					// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
					strokeLinecap: 'butt',

					// Text size

					// How long animation takes to go from one percentage to another, in seconds
					pathTransitionDuration: 0.5,

					// Can specify path transition in more detail, or remove it entirely
					// pathTransition: 'none',

					// Colors
					pathColor: `#EF5FA2`,
					textColor: '#f88',
					trailColor: '#d6d6d6',
					backgroundColor: '#3e98c7',
				})}
			>
				<CountDownTimer date={countdownTime} />
			</StyledProgressIndicator>
		</>
	)
}

export default FastProgressIndicator
