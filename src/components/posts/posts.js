import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import PostsComponent from './posts-component';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
