/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserContextProvider } from 'containers/User/UserContext'
import ErrorBoundary from './shared/ErrorBoundary/ErrorBoundary'
import 'shared/FontAwesomeIcon/FontAwesomeIcon'
import 'scss/_custom.scss'
import 'styles/fonts.css'
import 'styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
