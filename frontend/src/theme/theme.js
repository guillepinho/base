import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    text: {
      main: '#f8f8f2',
    },
    bg: {
      main: '#21222C',
      secondary: '#282a36',
      third: '#44475a',
    },
    hover: {
      main: '#6272a4',
    },
    focused: {
      main: '#8be9fd'
    },
    warning: {
      main: '#44475a',
    },
    error: {
      main: '#ff5555',
    },
    success: {
      main: '#50fa7b'
    }
  },
});

export default theme;