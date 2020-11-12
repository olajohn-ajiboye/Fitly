import React, { useState } from 'react'
import { Paper, Typography, FormControl, FormHelperText, InputAdornment, FilledInput } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useMutation, useQuery } from '@apollo/client'

// methods and hooks
import usePrevious from '../../../hooks/usePrevious'
import { currentUser } from '../../auth'

// queries and mutations
import { UPSERT_WEIGHT } from '../../../graphql/mutations'
import { upsertWeight as upsertWeightQuery, upsertWeightVariables } from '../../../graphql/mutations/types/upsertWeight'
import { getWeights as getWeightsQuery, getWeightsVariables } from '../../../graphql/queries/types/getWeights'
import { GET_WEIGHTS } from '../../../graphql/queries'

// components and styles
import SnackBar from '../../../components/SnackBar/SnackBar'
import { useStyles } from './styles'

const entry_date = new Date().toISOString().split('T')[0]

export default () => {
	const { root, title } = useStyles()
	const [weight, setWeight] = useState(90.0)
	const [message, setMessage] = useState('')
	const [openSnackBar, setOpen] = useState(false)
	const [isError, setError] = useState(false)
	const previousWeight = usePrevious(weight)
	const user = useSelector(currentUser)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const target = e.currentTarget as HTMLInputElement
		setWeight(+target.valueAsNumber.toFixed(3))
	}

	const onCloseSnackBar = () => setOpen(false)

	const [upsertWeight] = useMutation<upsertWeightQuery, upsertWeightVariables>(UPSERT_WEIGHT, {
		variables: {
			id: `${entry_date}-${user?.id}`,
			entry_date,
			user_id: user?.id ?? '',
			weight,
		},
	})

	const { refetch } = useQuery<getWeightsQuery, getWeightsVariables>(GET_WEIGHTS, {
		variables: { user_id: user?.id },
	})
	const updateWeight = async (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			// prevent sending request when weight value has not changed
			if (previousWeight === weight) return
			try {
				await upsertWeight()
				setMessage('Updated')
				refetch()
			} catch (error) {
				setError(true)
				setMessage('Error Updating')
			} finally {
				setOpen(true)
			}
		}
	}

	return (
		<>
			<Paper className={root}>
				<Typography variant="h6" className={title}>
					Weight
				</Typography>
				<FormControl>
					<FilledInput
						onKeyPress={(e) => updateWeight(e)}
						id="filled-adornment-weight"
						type="number"
						value={weight}
						onChange={(e) => handleChange(e)}
						endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
						aria-describedby="filled-weight-helper-text"
						inputProps={{
							'aria-label': 'weight',
						}}
					/>
					<FormHelperText id="filled-weight-helper-text">Enter Weight</FormHelperText>
				</FormControl>

				<SnackBar
					message={message}
					open={openSnackBar}
					severity={isError ? 'error' : 'success'}
					onClose={onCloseSnackBar}
					style={{ backgroundColor: 'green' }}
				/>
			</Paper>
		</>
	)
}
