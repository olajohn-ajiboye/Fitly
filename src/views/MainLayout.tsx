import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Modal, Fade, Backdrop } from '@material-ui/core'

import { Chart } from '../features/chart'
import { SummaryNav } from '../features/currentDay'
import { Motivation } from '../features/motivation'
import { DataEntry } from '../features/dataEntry/Main'

import { closeModal, modalOpen } from '../features/dataEntry/dataEntrySlice'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
		container: {
			display: 'flex',
			justifyContent: 'space-between',
		},
	})
)

export default function Layout() {
	const { container, root } = useStyles()
	const open = useSelector(modalOpen)
	const dispatch = useDispatch()

	return (
		<>
			<div className={root}>
				<Modal
					open={open}
					onClose={() => dispatch(closeModal())}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<DataEntry />
					</Fade>
				</Modal>

				<Grid container className={container} spacing={2}>
					<Grid item xs lg md sm>
						<SummaryNav />
						<Chart />
						<Motivation />
					</Grid>
				</Grid>
			</div>
		</>
	)
}
