import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: theme.spacing(2),
			textAlign: 'center',
			marginBottom: 20,
			'& .MuiAlert-filledSuccess': {
				backgroundColor: '#4caf50',
			},
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
