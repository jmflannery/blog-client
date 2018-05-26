import { connect } from 'react-redux';
import { createPost } from '../../../../actions/posts';
import NewPostComponent from './new-post-component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createPost: (title, slug, content) => dispatch(createPost(title, slug, content))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPostComponent);
