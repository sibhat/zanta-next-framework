import React from 'react';
import Typography from "@material-ui/core/Typography";
import {FormControl, Input, InputLabel, Button} from "@material-ui/core";
import {useStyles} from "./style";

const SignUp = (props) => {
	const { value, index, ...other } = props;
	const classes = useStyles();

	const [user, setUser] = React.useState({email: "", password: ""});
	
	
	const handleChange = event => {
		setUser({...user, [event.target.name]: event.target.value});
	};
	const onSubmit = (e) =>{
		e.preventDefault();
		props.register(user);
	};

	return (
			<form onSubmit={onSubmit} className={`${classes.form + classes.container}`} hidden={value !== index} >
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

				<Button variant="contained" color='primary' className={classes.button} onClick={onSubmit}>
					Sign Up
				</Button>
			</form>
	);
};

export default SignUp;
