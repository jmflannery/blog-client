import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostListItemComponent from './post-list-item-component';
import { selectPost } from '../../../actions/posts';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectPost: (slug) => dispatch(selectPost(slug))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostListItemComponent));
