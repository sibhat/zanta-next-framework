import Head from "next/head";
import Nav from "./nav";
import { observer, inject } from 'mobx-react';
import Auth from './auth/';
export default inject('store') (observer ((props) =>{
	console.log(props);
	return (
		<div>
			<Head>
					<title>Home</title>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>
			<Nav />
			{props.store.isDisplay && <Auth isDisplay={props.store.isDisplay}/>}
			{props.children}
		</div>
	)
}))