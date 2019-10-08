import React from 'react'
import Link from 'next/link'
import { AppBar, makeStyles, Toolbar, Button } from '@material-ui/core/';

const links = [
	{href: '/about', label: 'About us'},
	{href: '/services', label: 'Services'},
	{href: '/community', label: 'Community'},
	{href: '/contact', label: 'Contact Us'},
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link
});
//
const useStyles = makeStyles(theme => ({
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto',
	},
	root: {
		boxShadow: 'none',
		marginTop: theme.spacing(2),
		backgroundColor: 'transparent',
		color: 'white'
	},
	a:{
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		}
	}
}));
const Nav = (props) => {

	const classes = useStyles();
	return(
		<AppBar position="static" className={classes.root}>
			<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
				<Link href='/' >
						<a className={classes.a}>Zanta 📸</a>
				</Link>
					{links.map(({key, href, label}) => (
						<Link href={href} key={key} >
								<a href={href} className={classes.a}>{label}</a>
						</Link>
					))}
				<Button onClick={() =>{
					props.store.toggleAuth()
				}} variant="contained" color={'primary'}>{props.status}</Button>
			</Toolbar>
		</AppBar>
	)};

export default Nav;
