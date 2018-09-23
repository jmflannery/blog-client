import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostListItem from './list-item/post-list-item';
import './posts.css';

class PostsComponent extends Component {
  render() {
    let postIndex = this.props.posts.map(post => <PostListItem post={post} key={post.id} />);

    return (
      <nav>
        {postIndex}
      </nav>
    );
  }
}

export default PostsComponent;
