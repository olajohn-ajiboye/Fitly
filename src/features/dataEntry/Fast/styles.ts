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
		edit: {
			cursor: 'pointer',
		},
		updates: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 10,
			'& h5,h6': {
				margin: 10,
				fontWeight: 500,
			},
			'& span': {
				color: '#EF5FA2',
			},
			'& .feeling': {
				fontSize: '2rem',
				padding: 10,
				textAlign: 'center',
				cursor: 'pointer',
			},
		},
	})
)
