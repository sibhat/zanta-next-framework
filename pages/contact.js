import React, {useState} from 'react';
import Layout from "../src/components/layout";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(() => ({
	root: {
		textAlign: 'center',
		border: 'none',
		boxShadow: 'none',
		minHeight: '100vh',
		position: 'relative'
	},
	
}));
const Contact = () => {
	const [values, setValues] = useState({name: "", email: "", message: ""});
	const classes = useStyles();
	
	const handleChange = name => event =>{
		setValues({...values, [name]: event.target.value})
	};
	return (
		<Layout className={classes.root}>
			<h1>Contact US</h1>
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					id="filled-name"
					label="Name"
					className={classes.textField}
					value={values.name}
					onChange={handleChange('name')}
					margin="normal"
					variant="filled"
				/>
				<TextField
					id="filled-name"
					label="Email"
					className={classes.textField}
					value={values.email}
					onChange={handleChange('email')}
					margin="normal"
					variant="filled"
				/>
				<TextField
					id="filled-name"
					label="Message"
					className={classes.textField}
					value={values.message}
					onChange={handleChange('message')}
					margin="normal"
					variant="filled"
				/>
			</form>
		</Layout>
	);
};

export default Contact;
