import { connect } from 'react-redux';
import { createPost } from '../../../actions/posts';
import NewPostComponent from './new-post-component';
import { getToken } from '../../../selectors/sessions';

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  createPost: (title, slug, content) => dispatch(createPost(title, slug, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPostComponent);
