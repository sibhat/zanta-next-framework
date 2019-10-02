import React from 'react'
import { Provider } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import App from 'next/app'
import { initializeStore } from '../store'
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../config/theme';

export default class MyApp extends App {
	static async getInitialProps ({ Component, ctx }) {
		//
		// Use getInitialProps as a step in the lifecycle when
		// we can initialize our store
		//
		const isServer = typeof window === 'undefined';
		const store = initializeStore(isServer);
		//
		// Check whether the page being rendered by the App has a
		// static getInitialProps method and if so call it
		//
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return {
			initialState: getSnapshot(store),
			isServer,
			pageProps
		}
	}
	
	constructor (props) {
		super(props);
		this.store = initializeStore(props.isServer, props.initialState)
	}
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}
	
	
	render () {
		const { Component, pageProps } = this.props;
		return (
			<Provider store={this.store}>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		)
	}
}