import React from 'react';
import {Paper, Grid, Typography, makeStyles} from "@material-ui/core";
import Layout from "../src/components/layout";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		textAlign: 'center',
		padding: theme.spacing(3),
		border: 'none',
		boxShadow: 'none',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: '100%',
	},
	img:{
		width: '100%'
	}
}));
export default function about() {
	let classes = useStyles();
	return (
		<Layout>
		
		<Paper className={classes.root}>
			<h1>About Us</h1>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Typography >
							We are expert in helping you plan for your wedding and
							get everything perfect for you
						</Typography>
						<Typography >
							Our services can help you manage everything very easily.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<img src="/static/about-1.jpg" className={classes.img} alt="Man and Women sitting on padded sofa beside sea"/>
					</Paper>
				</Grid>
			</Grid>
		</Paper>
		</Layout>
			);
}