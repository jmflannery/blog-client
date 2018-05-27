import fetchJson, { login, loginWithToken } from '../fetch-json';

const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

const signInSuccess = ({ token, currentUser }) => ({
  type: SIGN_IN_SUCCESS,
  token,
  currentUser
});

const signOutSuccess = ({ token, currentUser }) => ({
  type: SIGN_OUT_SUCCESS
});

const signIn = (email, password) => {
  return dispatch => {
    return login(email, password)
    .then(session => dispatch(signInSuccess(session)))
    .catch(response => Promise.reject(response))
  };
};

const signinWithToken = (token) => {
  return dispatch => {
    return loginWithToken(token)
      .then(session => dispatch(signInSuccess(session)))
      .catch(response => Promise.reject(response))
  };
};

const signOut = (token) => {
  return dispatch => {
    let url = `http://localhost:3000/logout`;
    return fetchJson(url, {
      method: 'DELETE'
    }, token)
    .then(session => dispatch(signOutSuccess(session)))
    .catch(response => Promise.reject(response))
  };
};

export {
  signIn,
  signOut,
  signinWithToken,
  signInSuccess,
  signOutSuccess,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
};
