import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="icon">
          <i className="fas fa-code"></i>
        </div>
        <span className="blog-title">Jacks Dev Blog</span>
      </div>
    );
  }
}

export default Header;
