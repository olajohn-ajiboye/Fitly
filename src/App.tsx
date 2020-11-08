import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { CircularProgress, SwipeableDrawer } from '@material-ui/core'

// methods
import { getCurrentUserAsync } from './features/auth'
import PrivateRoute from './features/auth/PrivateRoute'

import { isAuth } from './features/auth'

// components
import { AppBar } from './components/AppBar'
import SideBar from './components/Menu'

const LandingPage = lazy(() => import('./views/LandingPage'))
const MainLayout = lazy(() => import('./views/MainLayout'))
const LoginPage = lazy(() => import('./views/Login'))

const theme = createMuiTheme({
	typography: {
		fontFamily: "'Poppins', sans-serif",
		fontWeightBold: 700,
	},
	palette: {
		text: {
			primary: 'rgb(198, 211, 231)',
			secondary: '#00000',
		},
	},
	overrides: {
		MuiPaper: {
			root: {
				color: 'rgb(198, 211, 231)',
				backgroundColor: 'rgb(29, 38, 54) !important',
			},
		},
	},
})

function App() {
	const [active, setActive] = useState<boolean>(false)
	const dispatch = useDispatch()
	const auth = useSelector(isAuth)

	const onMenuClick = () => {
		setActive(!active)
	}

	useEffect(() => {
		dispatch(getCurrentUserAsync())
	}, [dispatch])

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<CircularProgress style={{ margin: '50%', color: 'white' }} />}>
				<Router>
					{auth && <AppBar onMobileMenuClick={onMenuClick} />}
					<Switch>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/start">
							<LandingPage />
						</Route>
						<PrivateRoute exact path="/">
							<MainLayout />
						</PrivateRoute>
					</Switch>
				</Router>
			</Suspense>
			<SwipeableDrawer anchor="left" open={active} onClose={onMenuClick} onOpen={onMenuClick}>
				<SideBar />
			</SwipeableDrawer>
		</ThemeProvider>
	)
}

export default App
