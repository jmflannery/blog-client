import React, { Component } from 'react';
import './blog.css';

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
        this.props.fetchPosts();
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.loaded) {
      this.props.fetchPosts()
        .then(this.setState({ loaded: true }))
    } else if (prevProps.token && !this.props.token) {
      this.props.fetchPosts()
        .then(this.setState({ loaded: false }))
    }
  }

  render() {
    return (
      <div className="blog">
        {this.props.children}
      </div>
    );
  }
}

export default BlogComponent;
