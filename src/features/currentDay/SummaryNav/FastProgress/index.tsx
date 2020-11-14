import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import CountDownTimer from '../CountDownTimer/index'

import 'react-circular-progressbar/dist/styles.css'

const FastProgressIndicator = () => {
	return (
		<>
			<h1> {''}</h1>
			<CircularProgressbarWithChildren
				value={25}
				styles={buildStyles({
					// Rotation of path and trail, in number of turns (0-1)
					rotation: 0.25,

					// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
					strokeLinecap: 'butt',

					// Text size
					textSize: '14px',

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
				<CountDownTimer />
			</CircularProgressbarWithChildren>
		</>
	)
}

export default FastProgressIndicator
