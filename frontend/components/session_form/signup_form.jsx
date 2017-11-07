import React from 'react';
import ReactDOM from 'react';

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
      avatar: null,
      imageUrl: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    delete this.state.imageUrl;
    const formData = new FormData();
    for (let i in this.state) {
      if (!(this.state[i] == null)) {
        formData.append(`user[${i}]`, this.state[i])
      }
    }
    this.props.processForm(formData).then(() => this.props.history.push('/browse/featured'));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  updateFile(e) {
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];

    fileReader.onloadend = () => {
      this.setState({ avatar: file, imageUrl: fileReader.result });
      document.getElementById('preview').className = "preview-container-loaded";
    }

    if (file) {
      fileReader.readAsDataURL(file);
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
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={this.update('password')}
              >
            </input>
            <input
              type="password"
              placeholder="CONFIRM PASSWORD"
              value={this.state.password_confirmation}
              onChange={this.update('password_confirmation')}
              >
            </input>
            <input
              type="text"
              value={this.state.name}
              placeholder="WHAT SHOULD WE CALL YOU?"
              onChange={this.update('name')}
              >
            </input>
            <label htmlFor="birth-date" className="form-label">DATE OF BIRTH:</label>
            <input
              type="date"
              id="birth-date"
              value={this.state.birthday}
              onChange={this.update('birthday')}
              >
            </input>
            <label htmlFor="file-upload" className="form-label avatar">Upload an Avatar!</label>
            <input
              type="file"
              id="file-upload"
              onChange={this.updateFile}
              >
            </input>
            <div className="preview-container" id='preview'>
              <img src={this.state.imageUrl} className="avatar-image-preview" />
            </div>
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
