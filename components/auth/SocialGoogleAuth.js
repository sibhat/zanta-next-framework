import React, {Component} from 'react';
// import PropTypes from 'prop-types';

const SCOPE = 'email profile';
class SocialGoogleAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignedIn: false,
			user: null
		};
		this.GoogleAuth = null
	}
	handleClientLoad =() =>{
		// Load the API's client and auth2 modules.
		// Call the initClient function after the modules load.
		window.gapi.load('client:auth2', this.initClient);
	};
	
	initClient= () =>{
		// Retrieve the discovery document for version 3 of Google Drive API.
		// In practice, your app can retrieve one or more discovery documents.
		// var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
		
		// Initialize the gapi.client object, which app uses to make API requests.
		// Get API key and client ID from API Console.
		// 'scope' field specifies space-delimited list of access scopes.
		window.gapi.auth2.init({
			// 'apiKey': 'AIzaSyDt0NfbVJIN4LugADtFNBvTgSO1xhCKb3Y',
			'clientId': '282058802346-todsn2um9osl2csqp8rtl0jtgnnm4plf.apps.googleusercontent.com',
			redirectUri: "",
			accessType: 'offline',
			// clientId: '282058802346-opfdtjcjj8mgc9ebscka9mvquejvmsva.apps.googleusercontent.com',
			scope: SCOPE
		}).then(() => {
			window.GoogleAuth = window.gapi.auth2.getAuthInstance();
			
			// Listen for sign-in state changes.
			window.GoogleAuth.isSignedIn.listen(this.updateSigninStatus);
			
			// Handle initial sign-in state. (Determine if user is already signed in.)
			// this.user = window.GoogleAuth.currentUser.get();
			this.setState({user: window.GoogleAuth.currentUser.get() });
			this.setSigninStatus();
		});
	};
	setSigninStatus = () => {
		 let user = window.GoogleAuth.currentUser.get();
		var isAuthorized = user.hasGrantedScopes(SCOPE);
		if (isAuthorized) {
			this.setState({isSignedIn: true, user})
		} else {
			this.setState({isSignedIn: false, user: null})
		}
	};
	updateSigninStatus = () =>{
		this.setSigninStatus();
	};
	handleAuthClick = () =>{
		if (window.GoogleAuth.isSignedIn.get()) {
			// User is authorized and has clicked 'Sign out' button.
			window.GoogleAuth.signOut();
			this.setState({isSignedIn: false, user: null})
		} else {
			// User is not signed in. Start Google auth flow.
			window.GoogleAuth.signIn();
		}
	};
	
	revokeAccess =() =>{
		window.GoogleAuth.disconnect();
	};
	
	componentDidMount() {
		const googleScript = document.createElement('script');
		googleScript.src = `https://apis.google.com/js/api.js`;
		window.document.body.appendChild(googleScript);
		googleScript.addEventListener("load", ()=>{
			this.handleClientLoad();
		})
	}
	
	render() {
		return (
			<div>
				<button onClick={this.handleAuthClick}>{
					this.state.isSignedIn? "Log out ": "Sign In with Google"
				}</button>
				<button onClick={this.revokeAccess}>Revoke access</button>
			</div>
		);
	}
}

SocialGoogleAuth.propTypes = {};

export default SocialGoogleAuth;