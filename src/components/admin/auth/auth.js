import { connect } from 'react-redux';
import AuthComponent from './auth-component';
import { signinWithToken } from '../../../actions/sessions';

const mapStateToProps = state => ({
  token: state.sessions.token
});

const mapDispatchToProps = (dispatch) => ({
  signinWithToken: (token) => dispatch(signinWithToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
