import { Component } from 'react';

class Auth extends Component {

  componentDidMount() {
    if (!this.props.token) {
      let token = window.localStorage.getItem('API-TOKEN');
      if (token) {
        this.props.signinWithToken(token);
      }
    }
  }

  render() {
    if (this.props.token) {
      return (this.props.children);
    } else {
      return null;
    }
  }
}

export default Auth;
