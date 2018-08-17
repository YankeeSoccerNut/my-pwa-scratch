import React from 'react'
import { render } from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import App from './components/App/App'
import './base.css'

render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'production' ) {
  OfflinePluginRuntime.install()
}
