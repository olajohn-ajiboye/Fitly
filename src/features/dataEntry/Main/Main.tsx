import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'

import VerticalDataCarousel from '../../../components/Carousel/VerticalCarousel'
import { closeModal } from '../dataEntrySlice'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginTop: 20,
			padding: theme.spacing(2),
		},
		item: {
			width: 350,
			[theme.breakpoints.up('sm')]: {
				width: 550,
			},
		},
		close: {
			float: 'right',
			cursor: 'pointer',
		},
	})
)

export default () => {
	const { root, item, close } = useStyles()
	const dispatch = useDispatch()

	return (
		<div className={root}>
			<button className={close} onClick={() => dispatch(closeModal())}>
				X
			</button>
			<Grid container spacing={3} justify="center">
				<Grid item className={item}>
					<VerticalDataCarousel />
				</Grid>
			</Grid>
		</div>
	)
}
