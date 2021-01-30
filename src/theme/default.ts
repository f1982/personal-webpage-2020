import { DefaultTheme } from 'styled-components'

interface Theme extends DefaultTheme {
  palette: {
    common: {
      background: string
      foreground: string
    }
    primary: {
      main: string
      contrastText: string
    }
    secondary: {
      main: string
      contrastText: string
    }
    info: {
      main: string
      contrastText: string
    }
    warnning: {
      main: string
      contrastText: string
    }
    error: {
      main: string
      contrastText: string
    }
    success: {
      main: string
      contrastText: string
    }
  }
  shadows: {
    panel: string
    card: string
  }
}

const palette = {
  common: {
    background: '#fff',
    foreground: '#666'
  },
  primary: {
    main: ' #efc8ee',
    contrastText: '#666'
  },
  secondary: {
    main: '#74ddf7',
    contrastText: '#000'
  },
  info: {
    main: '#64b5f6',
    contrastText: '#000'
  },
  warnning: {
    main: '#64b5f6',
    contrastText: '#000'
  },
  error: {
    main: '#e57373',
    contrastText: '#000'
  },
  success: {
    main: '#81c784',
    contrastText: '#000'
  }
}

const shadows = {
  panel: '0 19px 38px rgba(0, 0, 0, 0.30),0 15px 12px rgba(0, 0, 0, 0.22)',
  card: '0px 10px 10px 2px rgba(100, 100, 0, 0.4)'
}

const typography = {
  fontFamily: [
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto'
  ].join(','),
  color: {
    main: '#5c636d'
  },
  h1: {},
  h2: {},
  h3: {},
  h4: {}
}

typography.h1 = {
  fontFamily: typography.fontFamily,
  fontSize: '4.209rem',
  fontStyle: 'italic'
}

const theme: Theme = {
  palette,
  shadows
  // typography
}

export default theme
