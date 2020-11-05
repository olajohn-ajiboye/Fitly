import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getTodaysWeightAsync, weight, getWeightsAsync, allWeight } from '../../dataEntry/dataEntrySlice'
import useWeightDifferential from '../../../app/hooks/useWeightDifferential'
import Up from '@material-ui/icons/TrendingUpRounded'
import Down from '@material-ui/icons/TrendingDownRounded'

import { useStyles } from './styles'

const arrowStyle = (color: string) => {
	return { color }
}

const SummaryNav = () => {
	const { root, paper, typo } = useStyles()
	const newWeight = useSelector(weight)
	const weights = useSelector(allWeight) ?? []
	const dispatch = useDispatch()

	const entry_date = new Date().toISOString().split('T')[0]
	dispatch(
		getTodaysWeightAsync({
			user_id: 'd64d5a75-edf3-4127-8183-6a02f638a31c',
			entry_date,
		})
	)

	dispatch(
		getWeightsAsync({
			user_id: 'd64d5a75-edf3-4127-8183-6a02f638a31c',
		})
	)

	const diff = useWeightDifferential(weights)

	const isDown = diff?.isDown ? <Down style={arrowStyle('green')} /> : <Up style={arrowStyle('red')} />

	return (
		<Grid container spacing={3} className={root}>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					<Typography variant="h2" component="h2" className={typo}>
						{/* if currentDay doesn't have any weight use last available entered weight */}
						{newWeight ?? weights[0]?.value ?? 90} Kg
						<span className="extra">
							{' '}
							{isDown}
							{Math.abs(diff?.by ?? 0.0).toFixed(2)}
						</span>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					{'start_time'}
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					{'end_time'}
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					Fast
				</Paper>
			</Grid>
		</Grid>
	)
}

export default SummaryNav
