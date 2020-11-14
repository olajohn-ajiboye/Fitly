import { createStyles, makeStyles, Theme, styled } from '@material-ui/core/styles'
import Up from '@material-ui/icons/TrendingUpRounded'
import Down from '@material-ui/icons/TrendingDownRounded'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

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
				marginTop: '20%',
			},
			'& .fast-progress': {
				textAlign: 'center',
				width: '95%',
				height: '90%',
			},
		},
		paper: {
			height: 200,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
)

export const useWeightIndicatorStyle = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			height: 200,
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

export const StyledProgressIndicator = styled(CircularProgressbarWithChildren)({
	width: '50px',
})
export const ArrowUp = styled(Up)({
	color: 'red',
})

export const ArrowDown = styled(Down)({
	color: 'green',
})
