import React from 'react'
import { useDispatch } from 'react-redux'

// Material UI
import { AppBar, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AddTask from '@material-ui/icons/PostAddTwoTone'

// Methods
import { logOutAsync } from '../../features/auth/index'
import { showModal } from '../../features/dataEntry/dataEntrySlice'

//  styles
import { useStyles, StyledButton } from './styles'
import { useHistory } from 'react-router-dom'

interface AppBarProps {
	onMobileMenuClick: () => void
}
const HeaderBar = ({ onMobileMenuClick }: AppBarProps) => {
	const { root, appBar, menuButton, title, logout } = useStyles()
	const dispatch = useDispatch()
	let history = useHistory()

	const signOut = () => {
		dispatch(logOutAsync())
		history.push('/')
	}

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
					<StyledButton color="inherit" onClick={() => dispatch(showModal())}>
						<AddTask />
						Add
					</StyledButton>
					<StyledButton color="inherit" className={logout} onClick={signOut}>
						Sign Out
					</StyledButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	)
}
export default HeaderBar
