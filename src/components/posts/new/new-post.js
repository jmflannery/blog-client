import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost, selectPost } from '../../../actions/posts';
import NewPostComponent from './new-post-component';
import { getToken } from '../../../selectors/sessions';

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  createPost: (title, slug, content) => dispatch(createPost(title, slug, content)),
  selectPost: (slug) => dispatch(selectPost(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPostComponent));
