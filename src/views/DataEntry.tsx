import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { VerticalDataCarousel } from '../components'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginTop: 20,
			padding: theme.spacing(2),
		},
		item: {
			width: 400,
		},
	})
)

interface PageProps {
	onMobileMenuClick: () => void
	active?: boolean
}

export default ({ onMobileMenuClick }: PageProps) => {
	const { root, item } = useStyles()

	return (
		<div className={root}>
			<Link to="/">Home</Link>
			<Grid container spacing={3} justify="center">
				<Grid item className={item}>
					<VerticalDataCarousel />
				</Grid>
			</Grid>
		</div>
	)
}
