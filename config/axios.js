import axios from 'axios';

let api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

if (process.browser) {
	// client-side-only code
	console.log(process.env.REACT_APP_API_URL);
	if(localStorage && localStorage.user_token){
		api.defaults.headers.common["Authorization"] = `${localStorage.getItem("user_token")}`;
	}
}
export default api;