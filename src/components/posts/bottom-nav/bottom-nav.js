import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BottomNavComponent from './bottom-nav-component';
import { getPreviousPost, getNextPost} from '../../../selectors/posts';

const mapStateToProps = (state, ownProps) => ({
  previousPost: getPreviousPost(state, ownProps.match.params.slug),
  nextPost: getNextPost(state, ownProps.match.params.slug),
});

export default withRouter(connect(mapStateToProps)(BottomNavComponent));
