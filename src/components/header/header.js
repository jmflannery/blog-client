import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderComponent from './header-component';
import { signOut } from '../../actions/sessions';
import { getToken, getCurrentUser } from '../../selectors/sessions';

const mapStateToProps = state => ({
  token: getToken(state),
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  signOut: (token) => dispatch(signOut(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderComponent));
