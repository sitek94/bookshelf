import {loadDevTools} from './dev-tools/load'
import './bootstrap'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './app'
import {AppProviders} from './context'

loadDevTools(() => {
  const el = document.getElementById('root')
  const root = ReactDOM.createRoot(el)

  root.render(
    <AppProviders>
      <App />
    </AppProviders>,
  )
})
