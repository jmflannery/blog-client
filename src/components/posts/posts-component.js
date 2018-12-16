import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostListItem from './list-item/post-list-item';
import EditPost from './edit/edit-post';
import Post from './post/post';
import './posts.css';

class PostsComponent extends Component {
  render() {
    return (
      <div className="posts">
        <nav>
          {this.props.posts.map(post => <PostListItem post={post} key={post.id} />)}
        </nav>
        <div className="post">
          <Route exact path="/posts/:slug" component={Post} />
          <Route exact path="/posts/:slug/edit" component={EditPost} />
        </div>
      </div>
    );
  }
}

export default PostsComponent;
