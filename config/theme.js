import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#f1ae3e',
		},
		secondary: {
			main: '#9bf1ef',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
});

export default theme;