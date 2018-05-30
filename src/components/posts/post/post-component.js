import React, { Component } from 'react';
import moment from 'moment';
import './post.css';

class PostComponent extends Component {
  componentDidMount() {
    if (!this.props.post) {
      this.props.selectPost(this.props.match.params.slug);
    }
  }

  render() {
    if (!this.props.post) return null;
    return (
      <article>
        <div className="article-header">
          {this.postControls()}
          <h1>{this.props.post.title}</h1>
          <div>
            <span className="by">by</span>
            <span className="post-author">Jack Flannery</span>
            <span className="feather">
              <i className="fas fa-feather"></i>
            </span>
            <span className="post-date">
              {this.props.post.published_at ? moment(this.props.post.published_at).format('dddd, MMMM Do YYYY') : ""}
            </span>
          </div>
        </div>
        <div className="article-content">
          {this.props.post.content}
        </div>
      </article>
    );
  }

  postControls() {
    if (this.props.currentUser.email) {
      return (
        <div className="post-controls">
          <div className="post-control" onClick={this.togglePublished}>
            {this.publishButton()}
          </div>
          <div className="post-control">
            <i className="far fa-edit"></i>
          </div>
          <div className="post-control">
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      );
    }
    return null;
  }

  publishButton() {
    if (this.props.post.published_at) {
      return <i className="far fa-eye"></i>
    } else {
      return <i className="far fa-eye-slash"></i>
    }
  }
}

export default PostComponent;
