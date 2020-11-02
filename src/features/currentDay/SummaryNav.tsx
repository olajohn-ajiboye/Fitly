import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
// import { useQuery } from '@apollo/client'

import { fastData, weight } from '../dataEntry/dataEntrySlice'
// import { GET_CURRENT_WEIGHT } from '../../graphql/queries/getFast'
// import {
// 	getCurrentWeight_fitly_current_day,
// 	getCurrentWeightVariables,
// } from '../../graphql/queries/types/getCurrentWeight'

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
		typo: {},
	})
)

const SummaryNav = () => {
	const { root, paper, typo } = useStyles()
	const { start_time, end_time } = useSelector(fastData)
	const newWeight = useSelector(weight, shallowEqual)
	// const dispatch = useDispatch()
	// const { loading, error, data } = useQuery<any, getCurrentWeightVariables>(GET_CURRENT_WEIGHT, {
	// 	variables: {
	// 		user_id: '6c1e05a7-8339-4a29-9a86-715a4e5ea14c',
	// 		day_start: '2020-11-01T20:40:39.543636+00:00',
	// 	},
	// })

	// console.log(data?.fitly_current_day[0]?.weight)

	// useEffect(() => {
	// 	dispatch(getCurrentWeightAsync(data?.weight))
	// }, [dispatch, data])

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
