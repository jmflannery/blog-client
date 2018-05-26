import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import BlogComponent from './blog-component';
import { getToken } from '../../selectors/sessions';

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogComponent);
