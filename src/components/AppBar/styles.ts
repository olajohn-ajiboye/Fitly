import { Button } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'& a': {
			textDecoration: 'none',
		},
	},
	appBar: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'rgb(29, 38, 54)',
		backgroundImage: 'linear-gradient(to right, rgba(13, 230, 255, 0.15) 0%, rgba(201, 189, 174, 0) 25%)',
		color: '#2A338F',
		height: 50,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#2A338F',
		backgroundColor: '#EF5FA2',
		'&:hover': {
			backgroundColor: 'rgb(198, 211, 231)',
		},
	},
	title: {
		flexGrow: 1,
	},
	logout: {
		textTransform: 'capitalize',
		marginLeft: 20,
	},
}))

export const StyledButton = styled(Button)({
	backgroundColor: '#EF5FA2',
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: 'rgb(198, 211, 231)',
	},
})
