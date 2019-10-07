import React from 'react'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';

const links = [
	{href: '/', label: 'Home'},
	{href: '/about', label: 'About us'},
	{href: '/services', label: 'Services'},
	{href: '/community', label: 'Community'},
	{href: '/contact', label: 'Contact Us'},
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link
});
const Nav = (props) => {
	return(
		<AppBar position="static">
			<ul>
				<li>
					<Link href='/'>
						<a>Zanta 📸</a>
					</Link>
				</li>
				{links.map(({key, href, label}) => (
					<Link href={href} key={key}>
						<a href={href}>{label}</a>
					</Link>
				))}
				<button onClick={() =>{
					props.store.toggleAuth()
				}}>{props.status}</button>
			</ul>
			<style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
		</AppBar>
	)};

export default Nav;
