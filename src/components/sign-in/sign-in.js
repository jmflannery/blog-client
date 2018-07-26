import { connect } from 'react-redux';
import SignInComponent from './sign-in-component';
import { signIn } from '../../actions/sessions';
import { getToken } from '../../selectors/sessions';

const mapStateToProps = (state) => ({
  token: getToken(state)
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
