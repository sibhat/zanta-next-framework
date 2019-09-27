import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles, useTheme, Tab, Tabs} from "@material-ui/core";
import Login from './Login';
import SignUp from './SignUp';
const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		width: '500px',
		margin: 'auto'
	},
}));

const Auth = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	
	// const handleChangeIndex = index => {
	// 	setValue(index);
	// };
	
	return (
			<Paper className={classes.root}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="action tabs example"
				>
					<Tab label="Login" />
					<Tab label="Sign Up" />
				</Tabs>
				<Login value={value} index={0} dir={theme.direction} />
				<SignUp value={value} index={1} dir={theme.direction}/>
			</Paper>
	);
};

export default Auth;
