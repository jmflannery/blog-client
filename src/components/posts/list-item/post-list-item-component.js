import React, { Component } from 'react';
import './post-list-item.css';

class PostListItemComponent extends Component {
  render() {
    return (
      <div className='post-list-item'>
        <div className="post-link" onClick={this.selectPost.bind(this)}>
          <div className="post-title">{this.props.post.title}</div>
          <div className="post-preview">{this.props.post.content ? this.props.post.content.slice(0, 120) : ""}</div>
        </div>
      </div>
    );
  }

  selectPost() {
    this.props.selectPost(this.props.post.slug);
    this.props.history.push(`/blog/posts/${this.props.post.slug}`);
  }
};

export default PostListItemComponent;
