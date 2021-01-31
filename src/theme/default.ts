import createMuiTheme, {
  ThemeOptions
} from '@material-ui/core/styles/createMuiTheme'

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#ffc400'
    },
    secondary: {
      main: '#00f1f1'
    },
    success: {
      main: '#c6ff00'
    },
    error: {
      main: '#ff0000'
    },
    background: {
      default: '#f1f1f1',
      paper: '#f1f1f1'
    },
    text: {
      primary: 'rgba(0,0,0,0.93)'
    },
    warning: {
      main: '#ff6d00'
    },
    info: {
      main: '#ea80fc'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    button: {
      fontSize: '1.2rem'
    },
    h1: {
      fontSize: '5.4rem'
    },
    h2: {
      fontSize: '3.6rem'
    },
    h3: {
      fontSize: '2.7rem'
    },
    h4: {
      fontSize: '2.1rem'
    },
    h5: {
      textAlign: 'left',
      fontSize: '1.5rem'
    },
    h6: {
      fontSize: '1.2rem'
    },
    subtitle1: {
      fontSize: '0.9rem'
    },
    subtitle2: {
      fontSize: '0.8rem'
    },
    caption: {
      fontSize: '0.6rem'
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 30
  }
}

export default createMuiTheme(themeOptions)
