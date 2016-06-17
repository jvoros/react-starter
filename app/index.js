import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import './styles';

injectTapEventPlugin();

import Main from './components/main'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route>
      <Route path="/" component={Main} />
    </Route>
  </Router>
  ), document.getElementById('app'));
