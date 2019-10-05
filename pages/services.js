import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Grid, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import Layout from "../src/components/layout";
// import InboxIcon from '@material-ui/icons/Inbox';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		textAlign: 'center',
		padding: theme.spacing(3),
		border: 'none',
		boxShadow: 'none',
		color: 'white',
		minHeight: '100vh',
		backgroundColor: 'black',
		position: 'relative'
	},
	listItemText:{
		textAlign: "center"
	},
	bgImage:{
		backgroundImage: "url('/static/services-1.jpg')",
		opacity: '0.5',
		backgroundColor: 'black',
		backgroundSize: "cover",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		width: '100%',
		minHeight: '100vh',
		position: 'absolute',
		top: 0,
		left: 0,
	}
}));
const Service = () => {
	const classes = useStyles();
	return (
	<Layout>
		<Paper className={classes.root}>
			<div className={classes.bgImage}> </div>
			<h2>Services</h2>
			<Grid container spacing={3} className={classes.grid}>
				<Grid item xs={12} sm={6}>
					<List component="nav" aria-label="main mailbox folders">
						<ListItem button>
							<ListItemText primary="Wedding Photography" className={classes.listItemText}/>
						</ListItem>
						<ListItem button>
							<ListItemText primary="Wedding Website" className={classes.listItemText}/>
						</ListItem>
						<ListItem button>
							<ListItemText primary="Invitations" className={classes.listItemText}/>
						</ListItem>
					</List>
				</Grid>
				<Grid item xs={12} sm={6}>
					<List component="nav" aria-label="main mailbox folders">
						<ListItem button>
							<ListItemText primary="Private Wedding" className={classes.listItemText}/>
						</ListItem>
						<ListItem button>
							<ListItemText primary="Book Photography Services" className={classes.listItemText}/>
						</ListItem>
						<ListItem button>
							<ListItemText primary="Share Photos With Community" className={classes.listItemText}/>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Paper>
		</Layout>
	
	);
};

export default Service;
