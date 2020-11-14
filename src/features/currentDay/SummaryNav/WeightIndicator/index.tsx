import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { getWeights as getWeightsQuery, getWeightsVariables } from '../../../../graphql/queries/types/getWeights'
import { GET_WEIGHTS } from '../../../../graphql/queries'
import useWeightDifferential from '../../../../hooks/useWeightDifferential'
import { ArrowDown, ArrowUp, useWeightIndicatorStyle } from '../styles'
import { useSelector } from 'react-redux'
import { currentUser } from '../../../auth'

interface WeightIndicatorProps {
	weight: number
}
const WeightIndicator = ({ weight }: WeightIndicatorProps) => {
	const user = useSelector(currentUser)
	const { paper, typo } = useWeightIndicatorStyle()
	const { data } = useQuery<getWeightsQuery, getWeightsVariables>(GET_WEIGHTS, {
		variables: { user_id: user?.id },
		fetchPolicy: 'cache-first',
	})

	const diff = useWeightDifferential(data?.fitly_weight)
	const isDown = diff?.isDown ? <ArrowDown /> : <ArrowUp />
	return (
		<Grid item xs={6} sm={3}>
			<Paper elevation={0} className={paper}>
				{' '}
				<Typography variant="h2" component="h2" className={typo}>
					{/* if currentDay doesn't have any weight use last available entered weight */}
					{weight} Kg
					<span className="extra">
						{' '}
						{isDown}
						{Math.abs(diff?.by ?? 0.0).toFixed(2)}
					</span>
				</Typography>
			</Paper>
		</Grid>
	)
}

export default WeightIndicator
