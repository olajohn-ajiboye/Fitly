module.exports = {
	client: {
		service: {
			name: 'fitly-BE',
			url: process.env.REACT_APP_GRAPHQL_END_POINT,
			// optional disable SSL validation check
			skipSSLValidation: true,
			includes: ['./src/**/*.{ts,tsx,js,jsx,graphql,gql}'],
		},
	},
}
