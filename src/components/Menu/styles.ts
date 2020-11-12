import { makeStyles, styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: theme.spacing(2),
		color: theme.palette.text.secondary,
		display: 'flex',
		width: 250,
		flexDirection: 'column',
		alignItems: 'flex-start',
		'& img': {
			width: 35,
			height: 35,
			margin: 20,
		},
		'& .MuiAvatar-img': {
			display: 'inline-block',
			borderRadius: '50%',
			width: 45,
			height: 45,
		},
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		padding: '10px',
		width: 'calc(100% - 20px)',
	},
	typo: {
		textTransform: 'capitalize',
		marginRight: 5,
		fontWeight: 700,
	},
}))
export const StyledLink = styled(Typography)({
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '10px',
	lineHeight: '50px',
	width: 'calc(100% + 10px)',
	fontWeight: 500,
})
