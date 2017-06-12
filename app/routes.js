import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './containers/Home'
import About from './containers/About'
import Layout from './containers/Layout'

export default(
  <Route path='/' component={Layout}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path='about' name='about' component={About}></Route>
  </Route>
)
