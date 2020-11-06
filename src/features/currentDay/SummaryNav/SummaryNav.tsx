import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getTodaysWeightAsync, getWeightsAsync, allWeight } from '../../dataEntry/dataEntrySlice'
import useWeightDifferential from '../../../app/hooks/useWeightDifferential'
import Up from '@material-ui/icons/TrendingUpRounded'
import Down from '@material-ui/icons/TrendingDownRounded'

import { useStyles } from './styles'

const arrowStyle = (color: string) => {
	return { color }
}

const SummaryNav = () => {
	const { root, paper, typo } = useStyles()
	const weights = useSelector(allWeight) ?? []
	const dispatch = useDispatch()

	const entry_date = new Date().toISOString().split('T')[0]
	dispatch(
		getTodaysWeightAsync({
			user_id: '59016c82-a4db-4877-bf39-da135c35e712',
			entry_date,
		})
	)

	dispatch(
		getWeightsAsync({
			user_id: '59016c82-a4db-4877-bf39-da135c35e712',
		})
	)

	const diff = useWeightDifferential(weights)
	const isDown = diff?.isDown ? <Up style={arrowStyle('red')} /> : <Down style={arrowStyle('green')} />

	return (
		<Grid container spacing={3} className={root}>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					<Typography variant="h2" component="h2" className={typo}>
						{/* if currentDay doesn't have any weight use last available entered weight */}
						{weights[0]?.value ?? 90} Kg
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
