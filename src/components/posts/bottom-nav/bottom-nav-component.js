import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bottom-nav.css';

class BottomNavComponent extends Component {
  render() {
    let previousLink = null, nextLink = null;
    if (this.props.previousPost) {
      previousLink =
        <Link to={`/posts/${this.props.previousPost.slug}`}>
          <i class="fas fa-arrow-alt-circle-left"></i>
          {this.props.previousPost.title}
        </Link>;
    }
    if (this.props.nextPost) {
      nextLink =
        <Link to={`/posts/${this.props.nextPost.slug}`}>
          {this.props.nextPost.title}
          <i class="fas fa-arrow-alt-circle-right"></i>
        </Link>;
    }
    return (
      <div className="bottom-nav">
        <div className="arrow-link all">
          <Link to="/posts">
            <i class="fas fa-caret-square-left"></i>
            All Posts
          </Link>
        </div>
        <div className="previous-next">
          <div className="arrow-link previous">
            {previousLink}
          </div>
          <div className="arrow-link next">
            {nextLink}
          </div>
        </div>
      </div>
    )
  }
}

export default BottomNavComponent;
