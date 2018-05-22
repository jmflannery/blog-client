import React, { Component } from 'react';

class HomeComponent extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h1>Jacks Blog Home</h1>
      </div>
    );
  }
}

export default HomeComponent;
