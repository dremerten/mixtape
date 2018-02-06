import React from 'react';
import { Provider, connect} from 'react-redux';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { LoginFormContainer, SignupFormContainer } from './session_form/session_form_container';
import NewSessionContainer from './session_form/new_session';
import MainPageContainer from './main_page/main_page_container';
import NowPlayingBar from './nowplaying/nowplaying';
import { hideAllDropdowns } from '../actions/ui_actions';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  hideAllDropdowns: () => dispatch(hideAllDropdowns())
});

// TODO: SIMPLIFY ALL PROTECTED ROUTES

const App = (props) => (
  <div className="application-wrapper" onClick={ props.hideAllDropdowns }>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <ProtectedRoute path="/browse" component={MainPageContainer} />
      <ProtectedRoute path="/collection" component={MainPageContainer} />
      <ProtectedRoute path="/account" component={MainPageContainer} />
      <ProtectedRoute path="/view" component={MainPageContainer} />
      <ProtectedRoute path="/search" component={MainPageContainer} />
      <ProtectedRoute path="/users" component={MainPageContainer} />
      <AuthRoute exact path="/" component={NewSessionContainer} />
      <Redirect to='/'/>
    </Switch>
  </div>
);

export default withRouter(connect(null, mapDispatchToProps)(App));
