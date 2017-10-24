import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
)
