import { types, applySnapshot } from 'mobx-state-tree'

import DisplayAuth from './Auth';
import User from './User'
//debugging tools
import makeInspectable from 'mobx-devtools-mst';

let store = types.compose(DisplayAuth, User).named("store");

makeInspectable(store);
//
export function initializeStore (isServer, snapshot = null) {
	if (isServer) {
		store = DisplayAuth.create()
	}
	if (store === null) {
		store = DisplayAuth.create()
	}
	if (snapshot) {
		applySnapshot(store, snapshot)
	}
	return store
}