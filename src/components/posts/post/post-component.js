import React, { Component } from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './post.css';

class PostComponent extends Component {
  render() {
    return (
      this.props.post ?
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
            <ReactMarkdown source={this.props.post.content} />
          </div>
        </article>
      :<div>Loading...</div>
    );
  }

  postControls() {
    if (this.props.currentUser && this.props.currentUser.email) {
      let publishedClass = `post-control publish-button${this.props.post.published_at ? ' published' : ''}`
      return (
        <div className="post-controls">
          <div className={publishedClass} onClick={this.togglePublished.bind(this)}>
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
      return <i className="fas fa-eye"></i>
    } else {
      return <i className="fas fa-eye-slash"></i>
    }
  }

  togglePublished() {
    if (this.props.post.published_at) {
      this.props.unpublishPost(this.props.post.id);
    } else {
      this.props.publishPost(this.props.post.id);
    }
  }
}

export default PostComponent;
