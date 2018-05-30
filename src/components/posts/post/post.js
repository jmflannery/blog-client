import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostComponent from './post-component';
import { getSelectedPost } from '../../../selectors/posts';
import { getCurrentUser } from '../../../selectors/sessions';
import { selectPost } from '../../../actions/posts';

const mapStateToProps = (state, ownProps) => ({
  post: getSelectedPost(state),
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  selectPost: (post) => dispatch(selectPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostComponent));
