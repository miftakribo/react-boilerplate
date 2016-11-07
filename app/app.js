import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './containers/Home';
import About from './containers/About';
import Layout from './containers/Layout';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='about' name='about' component={About}></Route>
    </Route>
  </Router>,
app);
