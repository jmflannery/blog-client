import { connect } from 'react-redux';
import { updatePost } from '../../../actions/posts';
import { getPostBySlug } from '../../../selectors/posts';
import EditPostComponent from './edit-post-component';
import { getToken } from '../../../selectors/sessions';

const mapStateToProps = (state, ownProps) => ({
  post: getPostBySlug(state, ownProps.match.params.slug),
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  updatePost: (title, slug, content) => dispatch(updatePost(title, slug, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostComponent);
