import { connect } from 'react-redux';
import EditPostComponent from './edit-post-component';
import { updatePost } from '../../../actions/posts';
import { getPostBySlug } from '../../../selectors/posts';
import { getToken } from '../../../selectors/sessions';

const mapStateToProps = (state, ownProps) => ({
  token: getToken(state),
  post: getPostBySlug(state, ownProps.match.params.slug)
});

const mapDispatchToProps = dispatch => ({
  updatePost: (title, slug, content) => dispatch(updatePost(title, slug, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostComponent);
