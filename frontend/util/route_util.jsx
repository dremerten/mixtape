import { connect } from "react-redux"

const Auth = ({ Component: component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/"
      )
    )}/>
);

const Protected = ({ Component: component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/"
      )
    )}/>
);

const mapStateToProps = state = ({
  loggedIn: Boolean(state.session.currentUser)
})

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
