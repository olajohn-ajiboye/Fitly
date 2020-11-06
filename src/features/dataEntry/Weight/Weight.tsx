import React, { useState } from 'react'
import { Paper, Typography, FormControl, FormHelperText, InputAdornment, FilledInput } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import SnackBar from '../../../components/SnackBar/SnackBar'

// methods
import { addWeightAsync } from '../dataEntrySlice'
import { UPSERT_WEIGHT } from '../../../graphql/mutations/index'
import { upsertWeightVariables, upsertWeight as upsertWeightQuery } from '../../../graphql/mutations/types/upsertWeight'
import usePrevious from '../../../app/hooks/usePrevious'
import { useStyles } from './styles'
import { currentUser } from '../../auth'

const date = new Date().toISOString().split('T')[0]

export default () => {
	const { root, title } = useStyles()
	const [weight, setWeight] = useState(90.0)
	const [message, setMessage] = useState('')
	const [openSnackBar, setOpen] = useState(false)
	const previousWeight = usePrevious(weight)
	const user = useSelector(currentUser)

	const dispatch = useDispatch()

	const [addNewWeight] = useMutation<upsertWeightQuery, upsertWeightVariables>(UPSERT_WEIGHT, {
		variables: {
			weight,
			user_id: user?.id,
			entry_date: date,
		},
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const target = e.currentTarget as HTMLInputElement
		setWeight(+target.valueAsNumber.toFixed(3))
	}

	const onCloseSnackBar = () => setOpen(false)
	const updateWeight = async (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			// prevent sending request when weight value has not changed
			if (previousWeight === weight) return
			await addNewWeight()
				.then(() => {
					setMessage('Success updated')
					setOpen(true)
				})
				.catch((error) => {
					setMessage('Error updating')
					setOpen(true)
					console.log(error)
				})

			dispatch(addWeightAsync(weight))
		}
	}

	return (
		<>
			<Paper className={root}>
				<Typography variant="h6" className={title}>
					Weight
				</Typography>
				<FormControl variant="filled">
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
				{/* TODO : toggle message and type of snack bar */}
				<SnackBar
					message={message}
					open={openSnackBar}
					severity="success"
					onClose={onCloseSnackBar}
					style={{ backgroundColor: 'green' }}
				/>
			</Paper>
		</>
	)
}
