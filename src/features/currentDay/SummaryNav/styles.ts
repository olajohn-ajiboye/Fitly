import { createStyles, makeStyles, Theme, styled } from '@material-ui/core/styles'
import Up from '@material-ui/icons/TrendingUpRounded'
import Down from '@material-ui/icons/TrendingDownRounded'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			textAlign: 'center',
			padding: theme.spacing(2),
			color: theme.palette.text.secondary,
			'& .fast-timer': {
				color: 'inherit',
				fontWeight: 700,
				fontSize: 15,
			},
		},
		paper: {
			height: 150,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
)

export const useWeightIndicatorStyle = makeStyles((theme: Theme) =>
	createStyles({
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

export const ArrowUp = styled(Up)({
	color: 'red',
})

export const ArrowDown = styled(Down)({
	color: 'green',
})
