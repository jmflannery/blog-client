import { connect } from 'react-redux';
import PostsComponent from './posts-component';
import { getPosts } from '../../selectors/posts';

const mapStateToProps = (state, ownProps) => ({
  posts: getPosts(state)
});

export default connect(mapStateToProps)(PostsComponent);
