
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {lightTheme} from '../src/theme/Theme'

export const decorators = [
  (Story)=>(
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  )
]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}