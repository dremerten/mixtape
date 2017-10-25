import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.formType = this.props.formType;
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      birthday: '',
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
    const errors = this.props.errors.map((err, i) => <li key={i}>{err}</li>);
    return (
      <div className="signup-div">
        <div className="login-div">
          <div className="login-header">
            <div className="login-header-div">
              <img src="/assets/Logo-black.png" className="login-page-logo"/>
              <h1>Spinn</h1>
            </div>
          </div>
        </div>
        <div className="login-text-div">
          <div className="login-horiz"></div>
          <div className="login-text">SIGN UP</div>
          <div className="login-horiz"></div>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form signup" >
            <input
              type="text"
              placeholder="EMAIL"
              value={this.state.email}
              onChange={this.update('email')}
              >
            </input>
            <input
              type="password"
              className="login-input"
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={this.update('password')}
              >
            </input>
            <input
              type="password"
              className="login-input"
              placeholder="CONFIRM PASSWORD"
              value={this.state.password_confirmation}
              onChange={this.update('password_confirmation')}
              >
            </input>
            <input
              type="text"
              className="login-input"
              value={this.state.name}
              placeholder="WHAT SHOULD WE CALL YOU?"
              onChange={this.update('name')}
              >
            </input>
            <label htmlFor="birth-date" className="form-label">DATE OF BIRTH:</label>
            <input
              type="date"
              id="birth-date"
              className="login-input"
              value={this.state.birthday}
              onChange={this.update('birthday')}
              >
            </input>
          <input type="submit" value="SIGN UP" className="signup-button"></input>
        </form>
        <ul className="login-errors">
          {errors}
        </ul>
      </div>
    )
  }
}

export default SignupForm;
