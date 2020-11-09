import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'

// components
import App from './App'

// Methods
import store from './app/store'

// css
import './index.css'

const { REACT_APP_GRAPHQL_END_POINT } = process.env

const createApolloClient = () => {
	return new ApolloClient({
		link: new HttpLink({
			uri: REACT_APP_GRAPHQL_END_POINT,
		}),
		cache: new InMemoryCache(),
	})
}

const client = createApolloClient()
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Provider store={store}>
					<App />
				</Provider>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,

	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
