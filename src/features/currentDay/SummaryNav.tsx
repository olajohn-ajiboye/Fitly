import { Grid, Paper, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodaysWeightAsync, weight, getWeightsAsync, allWeight } from '../dataEntry/dataEntrySlice'
import useWeightDifferential from '../../app/hooks/useWeightDifferential'
import Up from '@material-ui/icons/TrendingUpRounded'
import Down from '@material-ui/icons/TrendingDownRounded'

const arrowStyle = (color: string) => {
	return { color }
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			textAlign: 'center',
			padding: theme.spacing(2),
			color: theme.palette.text.secondary,
		},
		paper: {
			height: 150,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		typo: {
			fontWeight: 700,
			fontSize: '1.5rem',
			'& .extra': {
				display: 'block',
				fontSize: '1.0rem',
			},
		},
	})
)

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
							<br />
							<br />
							before &rarr; <span> {diff?.previousWeight}</span>
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
