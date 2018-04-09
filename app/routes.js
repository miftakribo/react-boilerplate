import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Layout from './containers/Layout'

function getComponent(location, cb, path) {
	console.log(cb)
  // System.import(path).then(loadRoute(cb)).catch(errorLoading);
}

function Routes() {
	return (
	  <Layout>
	  	<Switch>
		    <Route exact  path="/" getComponent={getComponent}></Route>
		    <Route path='about' name='about' component={About}></Route>
		  </Switch>
	  </Layout>
	)
}

export default Routes