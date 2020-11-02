import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

// components
import { AppBar } from './components'
import { LandingPage, LoginPage, MainLayout, DataEntry } from './views'

// methods
import { isAuth, getCurrentUserAsync } from './features/auth'

const theme = createMuiTheme({
	typography: {
		fontFamily: "'Poppins', sans-serif",
		fontWeightBold: 'bold',
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
				backgroundColor: 'rgb(29, 38, 54)',
				backgroundImage: 'linear-gradient(to right, rgba(13, 230, 255, 0.15) 0%, rgba(201, 189, 174, 0) 25%)',
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
		</ThemeProvider>
	)
}

export default App
