import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import GlobalStyle from './theme/GlobalStyles'
import { darkTheme, lightTheme } from './theme/Theme'
import StoreProvider from './StoreProvider'

interface Props {
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children }: Props) => {
  // const theme = darkTheme
  const theme = lightTheme
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StoreProvider>
            {children}
            <GlobalStyle />
          </StoreProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default Providers
