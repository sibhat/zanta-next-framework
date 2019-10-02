import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%'
	},
	formControl: {
		margin: theme.spacing(1),
	},
	button: {
		margin: `${theme.spacing(1)}px auto`,
		display: "block",
		marginTop: `${theme.spacing(4)}px`,
		color: 'white'
	},
	form:{
		width: '100%'
	}
}));