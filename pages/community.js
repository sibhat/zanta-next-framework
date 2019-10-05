import React from 'react';
import {GridList, makeStyles, GridListTile} from "@material-ui/core";
import Layout from "../src/components/layout";

const useStyles = makeStyles(theme => ({
	root:{
		textAlign: 'center',
		backgroundColor: theme.palette.background.paper,
	},
	flex: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
		width: 700,
		height: 450,
		margin: "auto"
	},
}));
const community = () => {
	const classes = useStyles();
	let tileData = [{
		img: '/static/about-1.jpg',
		title: 'Image',
		author: 'author',
		cols: 1,
	},
		{
			img: '/static/services-1.jpg',
			title: 'Image',
			author: 'author',
			cols: 2,
		},
		{
			img: '/static/about-1.jpg',
			title: 'Image',
			author: 'author',
			cols: 3,
		}];
	return (
		<Layout className={classes.root}>
			<h1>Community</h1>
			<div className={classes.flex}>
				<GridList cellHeight={300} className={classes.gridList} cols={3} style={{margin: 'auto'}} >
					{tileData.map(tile => (
						<GridListTile key={tile.img} cols={tile.cols || 1}>
							<img src={tile.img} alt={tile.title}/>
						</GridListTile>
					))}
				</GridList>
			</div>
		</Layout>
	);
};

export default community;
