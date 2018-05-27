import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInComponent from './sign-in-component';
import { signIn } from '../../actions/sessions';

const mapStateToProps = (state) => ({
  token: state.sessions.token,
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInComponent));
