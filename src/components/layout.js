import React from 'react';
import Head from "next/head";
import Nav from "./nav";
import { observer, inject } from 'mobx-react';
import Auth from './auth';
export default inject('store') (observer ((props) =>{
	console.log(props);
	return (
		<div>
			<Head>
					<title>Home</title>
			</Head>
			<Nav />
			{props.store.isDisplay && <Auth isDisplay={props.store.isDisplay}/>}
			{props.children}
		</div>
	)
}))