import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './styles/GlobalStyles'
// import { myTheme } from './theme'
import theme from './theme/default'
import { ThemeProvider } from 'styled-components'
import { SettingContext } from './Settings'
import App from './App'

import StoreProvider from './store'

const render = () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <SettingContext.Provider
        value={{
          contentWidth: 950,
          smallDeviceWidth: 768
        }}>
        <StoreProvider>
          <App />
          <GlobalStyle />
        </StoreProvider>
      </SettingContext.Provider>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
  )
}

render()
