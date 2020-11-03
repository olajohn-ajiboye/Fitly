import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'

import { fastData, weight } from '../dataEntry/dataEntrySlice'
import { getCurrentWeightAsync } from '../dataEntry/dataEntrySlice'

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
			fontSize: '2rem',
		},
	})
)

const SummaryNav = () => {
	const { root, paper, typo } = useStyles()
	const { start_time, end_time } = useSelector(fastData)
	const newWeight = useSelector(weight)
	const dispatch = useDispatch()

	const entry_date = new Date().toISOString().split('T')[0]

	dispatch(
		getCurrentWeightAsync({
			user_id: 'd64d5a75-edf3-4127-8183-6a02f638a31c',
			entry_date,
		})
	)

	return (
		<Grid container spacing={3} className={root}>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					<Typography variant="h3" component="h2" className={typo}>
						{newWeight} Kg
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					{start_time}
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					{end_time}
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
