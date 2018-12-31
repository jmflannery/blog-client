import React, { Component } from 'react';
import Loading from '../loading.js';

class BlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    if (!this.props.token) {
      let token = window.localStorage.getItem('API-TOKEN');
      if (token && token.length) {
        this.props.signinWithToken(token)
          .catch(() => window.localStorage.removeItem('API-TOKEN'));
      } else {
        this.props.fetchPosts()
          .then(() => this.setState({ loaded: true }))
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPost) {
      document.title = this.props.selectedPost.title;
    } else {
      document.title = "Jack's Blog"
    }

    if (!this.state.loaded || prevProps.token && !this.props.token) {
      this.props.fetchPosts()
        .then(() => this.setState({ loaded: true }));
    }
  }

  render() {
    if (!this.state.loaded) {
      return <Loading />;
    }

    return (
      <div className="blog">
        {this.props.children}
      </div>
    );
  }
}

export default BlogComponent;
