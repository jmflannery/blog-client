import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './post-list-item.css';

class PostListItemComponent extends Component {
  render() {
    return (
      <NavLink to={`/posts/${this.props.post.slug}`} className='post-list-item'>
        <div className="post-title">{this.props.post.title}</div>
        <div className="post-date">{this.props.post.published_at ? moment(this.props.post.published_at).format('YYYY MMMM Do') : ""}</div>
        <div className="post-preview">{this.props.post.content ? this.props.post.content.slice(0, 120) : ""}</div>
      </NavLink>
    );
  }
};

export default PostListItemComponent;
