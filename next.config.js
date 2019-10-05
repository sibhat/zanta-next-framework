module.exports = {
	serverRuntimeConfig: { // Will only be available on the server side
		mySecret: process.env.REACT_APP_API_URL || "http://localhost:3000"
	},
	publicRuntimeConfig: { // Will be available on both server and client
		REACT_APP_API_URL: process.env.REACT_APP_API_URL
	},
	env:{
		REACT_APP_API_URL: process.env.REACT_APP_API_URL || "http://localhost:3001"
	}
};
exports.default={
	env:{
		REACT_APP_API_URL: "secret"
	}
};