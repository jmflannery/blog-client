import fetchJson from '../fetch-json';

const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

const signInSuccess = (token) => ({
  type: SIGN_IN_SUCCESS
});

const signIn = (email, password) => {
  return dispatch => {
    let url = `http://localhost:3000/login`;
    return fetchJson(url, {
      method: 'POST',
      headers: {
        Authorization: "Basic " + btoa(`${email}:${password}`)
      }
    })
    .then(response => dispatch(signInSuccess(response)))
    .catch(response => {
      console.log(response);
    })
  };
};

export {
  signIn,
  signInSuccess,
  SIGN_IN_SUCCESS
}