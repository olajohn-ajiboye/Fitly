import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(2),
			textAlign: 'center',
			marginBottom: 20,
			color: theme.palette.text.secondary,
		},
		start: {
			display: 'flex',
			width: 200,
			justifyContent: 'space-around',
		},
		end: {
			display: 'flex',
			width: 200,
			marginTop: 20,
			justifyContent: 'space-around',
		},
		updates: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 10,
			'& h6': {
				margin: '10px 0',
			},
			'& span': {
				color: '#EF5FA2',
			},
			'& > *': {
				margin: 0,
				padding: 0,
			},
			'& .feeling': {
				fontSize: '2rem',
				margin: 10,
				cursor: 'pointer',
			},
		},
	})
)
