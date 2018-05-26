import { login, loginWithToken } from '../fetch-json';

const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

const signInSuccess = ({ token, currentUser }) => ({
  type: SIGN_IN_SUCCESS,
  token,
  currentUser
});

const signIn = (email, password) => {
  return dispatch => {
    return login(email, password)
    .then(session => dispatch(signInSuccess(session)))
    .catch(response => console.log(response))
  };
};

const signinWithToken = (token) => {
  return dispatch => {
    return loginWithToken(token)
    .then(session => dispatch(signInSuccess(session)))
    .catch(response => console.log(response))
  };
};

export {
  signIn,
  signinWithToken,
  signInSuccess,
  SIGN_IN_SUCCESS
};
