import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    let sessionControls = null;
    if (this.props.token && this.props.currentUser) {
      sessionControls = (
        <div className="session-controls">
          <span className="user">{this.props.currentUser.email}</span>
          <span className="sign-out" onClick={() => this.signOut()}>Sign Out</span>
        </div>
      );
    }
    return (
      <div className='header'>
        <div className="side-a">
          <div className="icon">
            <i className="fas fa-code"></i>
          </div>
          <span className="blog-title">Jacks Dev Blog</span>
        </div>
        <div className="side-b">
          {sessionControls}
        </div>
      </div>
    );
  }

  signOut() {
    this.props.signOut(this.props.token)
      .then(() => window.localStorage.removeItem('API-TOKEN'))
  }
}

export default Header;
