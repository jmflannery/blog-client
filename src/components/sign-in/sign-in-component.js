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

  componentDidUpdate() {
    if (this.props.token && this.props.token.length && this.props.currentUser && this.props.currentUser.id > 0) {
      this.props.history.push('/blog/admin');
    }
  }

  signIn() {
    let { email, password } = this.state;
    if (!email || !password) return;
    this.props.signIn(email, password);
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
    )
  }
}

export default SignInComponent;
