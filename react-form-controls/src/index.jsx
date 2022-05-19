import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    const value = event.target.value;
    this.setState({ username: value });
  }

  handlePasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
    this.setState({ username: '', password: '' });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Username
          <input
          name='username'
          type='text'
          value={ this.state.username }
          onChange={ this.handleUsernameChange } />
        </label>
        <label>
          Password
          <input
          name='password'
          type="password"
          value={ this.state.password }
          onChange={ this.handlePasswordChange } />
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}

root.render(<RegistrationForm />);
