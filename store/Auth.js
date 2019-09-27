import {types} from 'mobx-state-tree';

const DisplayAuth = types.model('DisplayAuth', {
	isDisplay: true,
	isLoggedIn: false,
}).actions(self => ({
	toggleAuth() {
		self.isDisplay = !self.isDisplay
	},
	isLoggedInHandler() {
		self.isLoggedIn = !self.isLoggedIn
	}
}))
	.views(self => ({
	status() {
		return self.isLoggedIn ? "Sign In/ Sign Up" : "Sign Out"
	}
}));

export default DisplayAuth;