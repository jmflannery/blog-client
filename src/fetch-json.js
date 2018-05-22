// import { getToken } from './selectors/session';

const NO_CONTENT = 204;

const fetchJson = (url, options, auth = false, isJson = true) => {
  // let token = getToken(app.router.store.getState());
  let promise = new Promise((resolve, reject) => {
    return fetch(url, { ...headers(auth, isJson), ...options })
      .then(checkStatus)
      .then(toJson)
      .then(response => resolve(response))
      .catch(error   => reject(error));
  });
  return promise;
};

const toJson = response => {
  const { status } = response;
  if (status === NO_CONTENT) {
    return response;
  } else {
    return response.json();
  }
};

const checkStatus = response => {
  const { status } = response;
  if (status >= 200 && status < 300) {
    return response;
  }
  return Promise.reject(new Error(response.statusText || response.status));
};

const headers = (token = null, isJson = true) => {
  let headersObj = {};
  if (token) {
    headersObj = {
      Authorization: `Token ${token}`
    };
  }
  if (isJson) {
    headersObj = {
      ...headersObj,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }
  return { headers: headersObj };
};

export default fetchJson;
