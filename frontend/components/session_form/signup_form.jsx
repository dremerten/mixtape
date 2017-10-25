import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.formType = this.props.formType;
    this.state = {
      name: '',
      username: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state).then(() => this.props.history.push('/browse'));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    return (
      <div className="signup-div">
        <h1>Spinn</h1>
        <hr/>
        <h2>LOGIN</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              >
            </input>
          </label>
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
      </div>
    )
  }
}

export default SignupForm;
