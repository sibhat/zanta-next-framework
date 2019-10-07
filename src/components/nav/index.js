import React, {useEffect, useState} from 'react';
import {inject, observer} from "mobx-react";
import _Nav from './nav';
import _PrivateNav from './privateNav';

const Nav = (props) => {
	let [status, setStatus] = useState('loading..');
	let [isAuthenticated, setIsAuthenticated] = useState(false);
	
	useEffect(() => {
		setStatus(props.store.status());
		setIsAuthenticated(!!localStorage.getItem('user_token'))
	}, [props.store.isAuthenticated]);
	return (
		<div>
			{
				isAuthenticated ?
					<_PrivateNav store={props.store} status={status} /> :
					<_Nav store={props.store} isAuthenticated={props.store.isAuthenticated} status={status}/>
			}
		</div>
	);
};

export default inject('store')(observer(Nav));
