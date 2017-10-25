import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.formType = this.props.formType;
    this.state = {
      username: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state).then(() => this.props.history.push('/browse'));
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
    debugger
    const errors = this.props.errors.map((err, i) => <li key={i}>{err}</li>);
    return (
      <div className="login-div">
        <h1>Spinn</h1>
        <hr/>
        <h2>LOGIN</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              >
            </input>
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              >
            </input>
          </label>

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
