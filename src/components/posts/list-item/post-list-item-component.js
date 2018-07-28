import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './post-list-item.css';

class PostListItemComponent extends Component {
  render() {
    return (
      <div className='post-list-item'>
        <NavLink className="post-link" to={`/posts/${this.props.post.slug}`}>
          <div className="post-title">{this.props.post.title}</div>
          <div className="post-preview">{this.props.post.content ? this.props.post.content.slice(0, 120) : ""}</div>
        </NavLink>
      </div>
    );
  }
};

export default PostListItemComponent;
