import React from 'react';
import Typography from "@material-ui/core/Typography";
import {FormControl, Input, InputLabel, makeStyles, Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		
	},
	button: {
		margin: theme.spacing(1),
	},
}));

const SignUp = (props) => {
	const { value, index, ...other } = props;
	const classes = useStyles();

	const [user, setUser] = React.useState({email: "", password: ""});
	
	
	const handleChange = event => {
		setUser({...user, [event.target.name]: event.target.value});
	};

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`action-tabpanel-${index}`}
			aria-labelledby={`action-tab-${index}`}
			className={classes.container}
			{...other}
		>
			<form action="">

				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="auth-email">Email</InputLabel>
					<Input id="auth-email" value={user.email} name={"email"} onChange={handleChange} />
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="auth-password">Password</InputLabel>
					<Input id="auth-password" value={user.password} name={"password"} onChange={handleChange} />
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="auth-password">Confirm Password</InputLabel>
					<Input id="auth-password" value={user.password} name={"password"} onChange={handleChange} />
				</FormControl>

				<Button variant="contained" className={classes.button}>
					Sign Up
				</Button>
			</form>
		</Typography>
	);
};

export default SignUp;
