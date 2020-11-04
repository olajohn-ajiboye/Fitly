import React, { useState } from 'react'
import { Paper, Typography, FormControl, FormHelperText, InputAdornment, FilledInput } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import SnackBar from '../../components/SnackBar'

// methods
import { addWeightAsync } from './dataEntrySlice'
import { UPSERT_WEIGHT } from '../../graphql/mutations/index'
import { upsertWeightVariables, upsertWeight as upsertWeightQuery } from '../../graphql/mutations/types/upsertWeight'
import usePrevious from '../../app/hooks/usePrevious'

// use styles
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: theme.spacing(2),
			textAlign: 'center',
			marginBottom: 20,
		},
		title: {
			marginBottom: theme.spacing(3),
		},
		body: {
			display: 'flex',
			justifyContent: 'space-around',
			'& img ': {
				width: 30,
				height: 30,
				margin: 10,
			},
		},
		balance: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
		snackbar: {
			marginTop: '20%',
		},
	})
)

const date = new Date().toISOString().split('T')[0]

export default () => {
	const { root, title } = useStyles()
	const [weight, setWeight] = useState(90.0)
	const [message, setMessage] = useState('')
	const [openSnackBar, setOpen] = useState(false)
	const previousWeight = usePrevious(weight)

	const dispatch = useDispatch()

	const [addNewWeight] = useMutation<upsertWeightQuery, upsertWeightVariables>(UPSERT_WEIGHT, {
		variables: {
			weight,
			user_id: 'd64d5a75-edf3-4127-8183-6a02f638a31c',
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
				<SnackBar message={message} open={openSnackBar} severity="success" onClose={onCloseSnackBar} />
			</Paper>
		</>
	)
}
