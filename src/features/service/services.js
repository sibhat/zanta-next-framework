import React from 'react';
import {Grid, List, ListItem, ListItemText, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {
		// flexGrow: 1,
		textAlign: 'center',
		// padding: theme.spacing(3),
		// border: 'none',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
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
		filter: 'blur(2px)',
		backgroundSize: "cover",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		width: '100%',
		minHeight: '100vh',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	zIndexOne: {
		zIndex: 1
	}
}));
const Services = () => {
	const classes = useStyles();
	
	return (
		<Paper className={classes.root}>
			<div className={classes.bgImage}> </div>
			<h2 className={classes.zIndexOne}>Services</h2>
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
	);
};

export default Services;
