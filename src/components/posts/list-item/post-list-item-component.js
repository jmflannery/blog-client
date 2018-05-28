import React, { Component } from 'react';

class PostListItemComponent extends Component {
  render() {
    return (
      <div className='post-list-item'>
        <div className="post-link" onClick={this.selectPost.bind(this)}>
          <span>{this.props.post.title}</span>
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
