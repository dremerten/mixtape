import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.formType = this.props.formType;
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state).then(() => this.props.history.push('/browse/featured'));;
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    const errors = this.props.errors.map((err, i) => <li key={i}>{err}</li>);
    return (
      <div className="login-div">
        <div className="login-header">
          <div className="login-header-div">
            <div className="login-page-logo"/>
            <h1>Spinn</h1>
          </div>
        </div>
        <div className="login-text-div">
          <div className="login-horiz"></div>
          <div className="login-text">LOGIN</div>
          <div className="login-horiz"></div>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="text"
            className="login-input"
            value={this.state.email}
            placeholder="EMAIL"
            onChange={this.update('email')}
            >
          </input>
          <input
            type="password"
            value={this.state.password}
            className="login-input"
            placeholder="PASSWORD"
            onChange={this.update('password')}
            >
          </input>
          <input type="submit" value="LOGIN"></input>
        </form>
        <ul className="login-errors">
          {errors}
        </ul>
      </div>
    )
  }
}

export default LoginForm;
