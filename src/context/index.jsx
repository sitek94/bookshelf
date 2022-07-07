import * as React from 'react'
import {QueryClientProvider} from './query-client'

function AppProviders({children}) {
  return <QueryClientProvider>{children}</QueryClientProvider>
}

export {AppProviders}
