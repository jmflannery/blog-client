import { connect } from 'react-redux';
import SignInComponent from './sign-in-component';
import { signIn } from '../../actions/sessions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
