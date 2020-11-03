import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, styled } from '@material-ui/core/styles'
import { AppBar, Button, Hidden, IconButton, Typography, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import AddTask from '@material-ui/icons/PostAddTwoTone'
import { logOutAsync } from '../../features/auth/index'

const useStyles = makeStyles((theme) => ({
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

const StyledButton = styled(Button)({
	backgroundColor: '#EF5FA2',
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: 'rgb(198, 211, 231)',
	},
})

interface AppBarProps {
	onMobileMenuClick: () => void
}
const HeaderBar = ({ onMobileMenuClick }: AppBarProps) => {
	const { root, appBar, menuButton, title, logout } = useStyles()
	const dispatch = useDispatch()

	return (
		<div className={root}>
			<AppBar position="fixed" className={appBar}>
				<Toolbar>
					<IconButton edge="start" className={menuButton} aria-label="menu">
						<Hidden>
							{' '}
							<MenuIcon onClick={onMobileMenuClick} />
						</Hidden>
					</IconButton>
					<Typography variant="h6" className={title}></Typography>
					<StyledButton color="inherit">
						<AddTask />
						<Link to="/data"> Add</Link>
					</StyledButton>
					<StyledButton color="inherit" className={logout} onClick={() => dispatch(logOutAsync())}>
						Sign Out
					</StyledButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	)
}
export default HeaderBar
