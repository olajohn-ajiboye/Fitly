import React, { useState } from 'react'
import { Paper, Typography, FormControl, FormHelperText, InputAdornment, FilledInput } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'

// methods
import { addWeightAsync } from './dataEntrySlice'
import { ADD_WEIGHT } from '../../graphql/mutations/index'
import { addWeightVariables, addWeight_insert_fitly_current_day } from '../../graphql/mutations/types/addWeight'

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
		input: {},
	})
)

export default () => {
	const { root, title } = useStyles()
	const [weight, setWeight] = useState(90)
	const dispatch = useDispatch()

	const [addNewWeight, { data }] = useMutation<addWeight_insert_fitly_current_day, addWeightVariables>(ADD_WEIGHT, {
		variables: {
			weight,
			start: new Date(Date.now()),
			user_id: 'd64d5a75-edf3-4127-8183-6a02f638a31c',
		},
	})

	console.log(data)
	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setWeight(parseInt(target.value))
	}

	const updateWeight = async (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			await addNewWeight()
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
			</Paper>
		</>
	)
}
