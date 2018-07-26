import React, { Component } from 'react';
import './sign-in.css';

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  signIn() {
    let { email, password } = this.state;
    if (!email || !password) return;
    this.props.signIn(email, password)
      .then(() => this.props.history.push('/blog/posts'));
  }

  render() {
    return (
      <div className="sign-in-container">
        <div className="sign-in-form">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={(e) => this.setState({ email: e.target.value })} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => this.setState({ password: e.target.value })}/>
          <button onClick={() => this.signIn()}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignInComponent;
