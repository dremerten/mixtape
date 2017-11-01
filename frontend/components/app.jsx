import React from 'react';
import { Provider } from 'react-redux';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { LoginFormContainer, SignupFormContainer } from './session_form/session_form_container';
import NewSessionContainer from './session_form/new_session';
import MainPageContainer from './main_page/main_page_container';
import NowPlayingBar from './nowplaying/nowplaying';

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
      <AuthRoute path="/" component={NewSessionContainer} />
    </Switch>
  </div>
)

export default App;




const thing = "<ProtectedRoute path="/" component={NowPlayingBar} />"
