import { types, applySnapshot } from 'mobx-state-tree'

import DisplayAuth from '../store/Auth';

//debugging tools
import makeInspectable from 'mobx-devtools-mst';

let store = types.compose(DisplayAuth, DisplayAuth).named("store");

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