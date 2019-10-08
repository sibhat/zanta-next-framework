import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

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
			default: '#606060',
			paper: '#606060',
		},
		text: {
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)",
			primary: "rgba(255, 255, 255, 0.87)",
			secondary: "rgba(0, 0, 0, 0.54)"
		}
	},
});
console.log(theme);
export default theme;