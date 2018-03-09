import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Layout from './containers/Layout'

function Routes() {
	return (
	  <Layout>
	  	<Switch>
		    <Route exact  path="/" component={Home}></Route>
		    <Route path='about' name='about' component={About}></Route>
		  </Switch>
	  </Layout>
	)
}

export default Routes