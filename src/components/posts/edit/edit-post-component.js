import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { updatePost } from '../../../actions/posts'
import './edit-post.css';

class EditPostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post.title || '',
      slug: props.post.slug || '',
      content: props.post.content || ''
    };
  }

  render() {
    return (
      <div className="edit-post-container">
        <div className="edit-post-form">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={this.state.title} onChange={(e) =>
            this.setState({
              title: e.target.value,
              slug: e.target.value.replace(/\s+/g, '-').toLowerCase()
            })
          }/>
          <label htmlFor="title">Slug</label>
          <input type="text" id="title" value={this.state.slug} onChange={(e) =>
            this.setState({ slug: e.target.value })
          }/>
          <label htmlFor="content">Article</label>
          <textarea id="content" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })}/>
          <button onClick={() => this.save()}>Save</button>
        </div>
      </div>
    );
  }

  save() {
    if (!this.state.title && !this.state.content && !this.state.slug && !this.props.post) return;
    this.props.updatePost(this.props.post.id, this.state.title, this.state.slug, this.state.content)
      .then((post) => {
        this.props.history.push(`/blog/posts/${this.state.slug}`)
      });
  }
}

export default EditPostComponent;
