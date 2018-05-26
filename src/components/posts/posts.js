import { connect } from 'react-redux';
import PostsComponent from './posts-component';
import { getPosts } from '../../selectors/posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
