module.exports = {
	client: {
		service: {
			name: 'fitly-BE',
			url: 'https://smooth-firefly-61.hasura.app/v1/graphql',
			// optional disable SSL validation check
			skipSSLValidation: true,
			includes: ['./src/**/*.{ts,tsx,js,jsx,graphql,gql}'],
		},
	},
}
