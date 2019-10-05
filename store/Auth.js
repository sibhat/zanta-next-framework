import { types, flow } from "mobx-state-tree"
import api from '../config/axios';


const DisplayAuth = types.model('DisplayAuth', {
	isDisplay: false,
	isAuthenticated: false,
	email: types.optional(types.string, ''),
	name: types.optional(types.string, ''),
	updated_at: types.optional(types.Date, new Date()),
}).actions(self => ({
	toggleAuth() {
		self.isDisplay = !self.isDisplay;
		if(localStorage.getItem('user_token') !== null){
			self.logOut();
		}
	},
	isLoggedInHandler() {
		self.isAuthenticated = !self.isAuthenticated
	},
	resetAuth (){
		self.isAuthenticated = false;
		self.isDisplay = !self.isDisplay;
		self.email = "";
		self.name = "";
		self.updated_at = new Date();
	},
	socialAuthLogin(user){
		console.dir(user);
		self.isAuthenticated = true;
		self.isDisplay = !self.isDisplay;
		self.email = user.email;
		self.name = user.name || '';
		self.updated_at = new Date(user.updated_at);
	},
	loginIn: flow (function* (user){
		api.post('/users/login', {user})
			.then(res => {
				localStorage.setItem('user_token', res.headers.authorization);
				console.dir(res.data);
				self.socialAuthLogin(res.data)
			}).catch(err => console.dir(err))
	}),
	register: flow (function* (user){
		api.post('/users/sign_up', {user})
			.then(res => {
				localStorage.setItem('user_token', res.headers.authorization);
				self.socialAuthLogin(res.data)
			}).catch(err => console.dir(err))
	}),
	logOut: flow (function* (){
		api.delete('/users/logout', )
			.then(() => {
				localStorage.removeItem('user_token');
				api.defaults.headers.common["Authorization"] = null;
				
				self.resetAuth()
			}).catch(err => console.dir(err))
	}),
})).views(self => ({
		status() {
			return localStorage.getItem('user_token')?  "Sign Out" : "Sign In/ Sign Up"
		}
	}
));

export default DisplayAuth;