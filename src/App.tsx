import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

// methods
import { isAuth, getCurrentUserAsync } from './features/auth'

// components
import { AppBar } from './components/AppBar'

const DataEntry = lazy(() => import('./views/DataEntry'))
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
	const user = useSelector(isAuth)
	const dispatch = useDispatch()

	const onMobileMenuClick = () => {
		setActive(!active)
	}

	useEffect(() => {
		dispatch(getCurrentUserAsync())
	}, [dispatch])

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<CircularProgress />}>
				{!user ? (
					<LoginPage />
				) : (
					<Router>
						<AppBar onMobileMenuClick={onMobileMenuClick} />
						<Switch>
							<Route exact path="/">
								<MainLayout onMobileMenuClick={onMobileMenuClick} active={active} />
							</Route>
							<Route path="/start">
								<LandingPage />
							</Route>
							<Route path="/data">
								<DataEntry onMobileMenuClick={onMobileMenuClick} active={active} />
							</Route>
							<Route path="/login">
								<LoginPage />
							</Route>
						</Switch>
					</Router>
				)}
			</Suspense>
		</ThemeProvider>
	)
}

export default App
