import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostListItem from './list-item/post-list-item';
import Post from './post/post';

class PostsComponent extends Component {
  render() {
    let postIndex = this.props.posts.map(post => <PostListItem post={post} key={post.id} />)
    return (
      <div className="all-posts">
        <h1>Posts!</h1>
        <div className="post-index">
          {postIndex}
        </div>
        <div className="post-show">
          <Route path="/blog/posts/:slug" component={Post} />
        </div>
      </div>
    );
  }
}

export default PostsComponent;
