import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bottom-nav.css';

class BottomNavComponent extends Component {
  render() {
    let previousLink = null, nextLink = null;
    if (this.props.previousPost) {
      previousLink =
        <Link className="previous" to={`/posts/${this.props.previousPost.slug}`}>
          <i className="fas fa-arrow-alt-circle-left"></i>
          <span>{this.props.previousPost.title}</span>
        </Link>;
    }
    if (this.props.nextPost) {
      nextLink =
        <Link className="next" to={`/posts/${this.props.nextPost.slug}`}>
          <span>{this.props.nextPost.title}</span>
          <i className="fas fa-arrow-alt-circle-right"></i>
        </Link>;
    }
    let allLink =
      <Link className="all" to="/posts">
        <i className="fas fa-caret-square-left"></i>
        <span>All Posts</span>
      </Link>

    return (
      <div className="article-nav">
        <div className="nav-row">
          {allLink}
        </div>
        <div className="nav-row previous-next">
          {previousLink}
          {nextLink}
        </div>
      </div>
    )
  }
}

export default BottomNavComponent;
