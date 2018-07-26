import { connect } from 'react-redux';
import PostComponent from './post-component';
import { getPostBySlug } from '../../../selectors/posts';
import { getCurrentUser } from '../../../selectors/sessions';
import { publishPost, unpublishPost } from '../../../actions/posts';

const mapStateToProps = (state, ownProps) => ({
  post: getPostBySlug(state, ownProps.match.params.slug),
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  publishPost: (postId) => dispatch(publishPost(postId)),
  unpublishPost: (postId) => dispatch(unpublishPost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
