import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostListItem from './list-item/post-list-item';
import Post from './post/post';
import './posts.css';

class PostsComponent extends Component {
  render() {
    let postIndex = this.props.posts.map(post => <PostListItem post={post} key={post.id} />),
        path = this.props.location.pathname,
        showing;

    if (path.match(/\/posts$/)) {
      showing = false;
    } else if (path.match(/\/posts\/\S+/)) {
      showing = true;
    }

    return (
      <div className={ showing ? "posts show-post" : "posts" }>
        <div className="post-index">
          {postIndex}
        </div>
        <div className="post-show">
          <Route path="/posts/:slug" component={Post} />
        </div>
      </div>
    );
  }
}

export default PostsComponent;
