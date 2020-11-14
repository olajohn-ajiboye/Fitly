import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'

// methods and hooks
import { currentUser } from '../../auth'

// Queries and Mutations
import { GET_WEIGHTS } from '../../../graphql/queries'
import { getWeights as getWeightsQuery, getWeightsVariables } from '../../../graphql/queries/types/getWeights'

// components & styles
import { useStyles } from './styles'
import WeightIndicator from './WeightIndicator'
import FastProgressIndicator from './FastProgress'

const SummaryNav = () => {
	const { root, paper } = useStyles()
	const user = useSelector(currentUser)

	const { data } = useQuery<getWeightsQuery, getWeightsVariables>(GET_WEIGHTS, {
		variables: { user_id: user?.id },
		fetchPolicy: 'cache-first',
	})

	return (
		<Grid container spacing={2} className={root}>
			<WeightIndicator weight={data?.fitly_weight[0]?.value ?? 90} />
			<Grid item xs={6} sm={3}>
				<Paper elevation={6} className={paper}>
					<FastProgressIndicator />
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper elevation={6} className={paper}>
					{' '}
					{'end_time'}
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper elevation={6} className={paper}>
					{' '}
					Fast
				</Paper>
			</Grid>
		</Grid>
	)
}

export default SummaryNav
