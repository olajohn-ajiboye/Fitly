import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			textAlign: 'center',
			height: '35vh',
		},
		paper: {
			height: '100%',
		},
	})
)

export default () => {
	const { root, paper } = useStyles()
	return (
		<Grid item xs={12} sm={4} className={root}>
			<Paper className={paper}>ChartSide</Paper>
		</Grid>
	)
}
