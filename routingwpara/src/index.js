import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Details from './components/Details';
import PersonList from './components/PersonList';
import Layout from './components/Layout';

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path='/' component={Layout}>
  <IndexRoute component={PersonList}></IndexRoute>
  <Route path="details" component={Details}></Route>
  <Route path="home" component={PersonList}></Route>

  </Route>
 </Router>,
  document.getElementById('root')
);
