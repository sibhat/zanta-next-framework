import React from 'react';
import { Button, Typography, Input, FormControl, InputLabel} from "@material-ui/core";
import {useStyles} from "./style";

const Login = (props) => {
	const classes = useStyles();

	const { value, index, ...other } = props;
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
			<form onSubmit={e=>console.log(e)} className={classes.form}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="auth-email">Email</InputLabel>
					<Input id="auth-email" value={user.email} name={"email"} onChange={handleChange} />
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="auth-password">Password</InputLabel>
					<Input id="auth-password" value={user.password} name={"password"} onChange={handleChange} />
				</FormControl>
				<Button variant="contained" color='primary' className={classes.button}>
					Login
				</Button>
			</form>
		</Typography>
	);
};

export default Login;
