import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './login_form';

const SessionForm = (props) => (
  <div>
    <Switch>
      <Route path="/login"
        component={LoginForm}
        loggedIn={loggedIn}
        errors={errors}
        processForm={processForm}
        formType={formType}
        />
    </Switch>
  </div>
);

export default SessionForm;
