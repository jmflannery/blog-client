import React, { Component } from 'react';

class PostComponent extends Component {
  componentDidMount() {
    if (!this.props.post) {
      this.props.selectPost(this.props.match.params.slug);
    }
  }

  render() {
    if (!this.props.post) return null;
    return (
      <h1>{this.props.post.title}</h1>
    );
  }
}

export default PostComponent;
