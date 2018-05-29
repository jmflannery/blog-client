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
          <div>
            <h1>{this.props.post.title}</h1>
            <span className="by">by</span>
            <span className="post-author">Jack Flannery</span>
            <span className="feather">
              <i class="fas fa-feather"></i>
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
}

export default PostComponent;
