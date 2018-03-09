import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './stores'
import Routes from './routes'

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)
// const history = syncHistoryWithStore(browserHistory, store)

const app = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
  	<ConnectedRouter history={history}>
    	<Router>
    		<Routes />
    	</Router>
    </ConnectedRouter>
  </Provider>,
  app
)
