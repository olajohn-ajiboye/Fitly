import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			textAlign: 'center',
			padding: theme.spacing(2),
			color: theme.palette.text.secondary,
		},
		paper: {
			height: 150,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		typo: {
			fontWeight: 700,
			fontSize: '1.5rem',
			'& .extra': {
				display: 'block',
				fontSize: '1.0rem',
			},
		},
	})
)
