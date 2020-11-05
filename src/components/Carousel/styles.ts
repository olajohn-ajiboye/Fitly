import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		height: '60vh',
		'& img': {
			height: 25,
			width: 25,
			margin: 5,
		},
		'& .MuiTab-root': {
			textTransform: 'capitalize',
		},
		'& .MuiTabs-scrollable': {
			marginTop: 20,
			justifyContent: 'space-evenly',
		},
		'& .MuiTab-wrapper': {
			alignItems: 'end',
		},
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		textTransform: 'capitalize',
		color: 'rgb(198, 211, 231)',
		width: '30%',
		fontWeight: 600,
	},
}))
