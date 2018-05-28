import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import BlogComponent from './blog-component';
import { getToken } from '../../selectors/sessions';
import { signinWithToken } from '../../actions/sessions';

const mapStateToProps = (state, ownProps) => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  signinWithToken: (token) => dispatch(signinWithToken(token)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogComponent);
