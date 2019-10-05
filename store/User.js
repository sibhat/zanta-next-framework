import {types} from "mobx-state-tree";

const User = types.model('user', {
	name: types.string,
	id: types.identifierNumber,
	updated_at: types.Date
}).actions(self=>({
	setUser(user){
		self.name = user.name;
		self.id = user.id;
		self.updated_at = new Date(user.updated_at);
	}
}));

export default User;