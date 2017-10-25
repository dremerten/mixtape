import React from 'react';
import { Provider } from 'react-redux';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { LoginFormContainer, SignupFormContainer } from './session_form/session_form_container';
import NewSession from './session_form/new_session';
import MainPageContainer from './main_page/main_page_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className="application-wrapper">
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <ProtectedRoute path="/browse" component={MainPageContainer} />
      <AuthRoute path="/" component={NewSession} />
    </Switch>
  </div>
)

export default App;
