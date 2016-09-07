import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import {NewSignUp} from '../../ui/NewSignUp.jsx';
import SignUp from '../../ui/SignUp.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={NewSignUp}/>
    <Route path="/:id" component={SignUp}/>
      {/*<Route path="*" component={NotFoundPage}/>*/}
  </Router>
);