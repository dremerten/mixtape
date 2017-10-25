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
import { LoginFormContainer, SignupFormContainer } from './session_form/session_form_container';
import NewSession from './session_form/new_session';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/" component={NewSession} />
    </Switch>
  </div>
)

export default App;
