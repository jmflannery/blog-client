import React, { Component } from 'react';
import './blog.css';

class BlogComponent extends Component {
  componentDidUpdate() {
    if (this.props.token && this.props.token.length) {
      this.props.fetchPosts();
    }
  }

  render() {
    return (
      <div className="blog">
        {this.props.children}
      </div>
    );
  }
}

export default BlogComponent;
