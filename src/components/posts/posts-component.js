import React, { Component } from 'react';

class PostsComponent extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div><h1>Posts!</h1></div>
    );
  }
}

export default PostsComponent;
