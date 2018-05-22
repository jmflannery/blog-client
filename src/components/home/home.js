import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import HomeComponent from './home-component';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
