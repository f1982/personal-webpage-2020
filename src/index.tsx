import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyle from './theme/GlobalStyles'
import theme from './theme/default'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from './App'

import StoreProvider from './store'

const render = () => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <App />
          <GlobalStyle />
        </StoreProvider>
      </ThemeProvider>
    </MuiThemeProvider>,
    document.getElementById('root') as HTMLElement
  )
}

render()
