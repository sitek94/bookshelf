import {loadDevTools} from './dev-tools/load'
import './bootstrap'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {DiscoverBooksScreen} from './discover'

loadDevTools(() => {
  const el = document.getElementById('root')
  const root = ReactDOM.createRoot(el)

  root.render(<DiscoverBooksScreen />)
})
