import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostListItemComponent from './post-list-item-component';

const mapStateToProps = (state, ownProps) => ({
});

export default withRouter(connect(mapStateToProps)(PostListItemComponent));
