import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './new-post.css';

class NewPostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      slug: '',
      content: ''
    };
  }

  render() {
    return (
      <div className="new-post-container">
        <div className="new-post-form">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={(e) =>
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
          <textarea id="content" onChange={(e) => this.setState({ content: e.target.value })}/>
          <button onClick={() => this.save()}>Save</button>
        </div>
      </div>
    );
  }

  save() {
    if (!this.state.title && !this.state.content && !this.state.slug) return;
    this.props.createPost(this.state.title, this.state.slug, this.state.content)
      .then((post) => this.props.history.push(`/posts/${this.state.slug}`));
  }
}

export default NewPostComponent;
