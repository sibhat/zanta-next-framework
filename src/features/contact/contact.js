import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Layout from "../../../pages/contact";

const useStyles = makeStyles(() => ({
	root: {
		textAlign: 'center',
		border: 'none',
		boxShadow: 'none',
		padding: '24px',
		position: 'relative',
	},
	container:{
		flexDirection: 'column',
		width: 400,
		margin: 'auto'
	},
	textField:{
		display: 'flex',
		backgroundColor: 'none',
	},
	btn:{
		marginTop: '30px'
	}
}));
const contact = () => {
	const [values, setValues] = useState({name: "", email: "", message: ""});
	const classes = useStyles();
	
	const handleChange = name => event =>{
		setValues({...values, [name]: event.target.value})
	};
	return (
		<div className={classes.root}>
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
				<Button variant="contained" color='primary' className={classes.btn}>
					Send Massage
				</Button>
			</form>
		</div>
	);
};

export default contact;
