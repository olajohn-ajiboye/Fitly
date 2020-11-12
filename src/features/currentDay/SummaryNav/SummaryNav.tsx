import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'

// methods and hooks
import { currentUser } from '../../auth'
import useWeightDifferential from '../../../hooks/useWeightDifferential'

// Queries and Mutations
import { GET_WEIGHTS } from '../../../graphql/queries'
import { getWeights as getWeightsQuery, getWeightsVariables } from '../../../graphql/queries/types/getWeights'

// components & styles
import { useStyles, ArrowUp, ArrowDown } from './styles'

const SummaryNav = () => {
	const { root, paper, typo } = useStyles()
	const user = useSelector(currentUser)

	const { data } = useQuery<getWeightsQuery, getWeightsVariables>(GET_WEIGHTS, {
		variables: { user_id: user?.id },
	})

	const diff = useWeightDifferential(data?.fitly_weight)
	const isDown = diff?.isDown ? <ArrowDown /> : <ArrowUp />

	return (
		<Grid container spacing={3} className={root}>
			<Grid item xs={6} sm={3}>
				<Paper elevation={0} className={paper}>
					{' '}
					<Typography variant="h2" component="h2" className={typo}>
						{/* if currentDay doesn't have any weight use last available entered weight */}
						{data?.fitly_weight[0]?.value ?? 90} Kg
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
