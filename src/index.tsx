import React from 'react'
import ReactDOM from 'react-dom'

import Providers from './Providers'
import App from './pages/App'

const render = () => {
  ReactDOM.render(
    <Providers>
      <App />
    </Providers>,
    document.getElementById('root')
  )
}

render()
