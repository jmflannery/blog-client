const NO_CONTENT = 204;

let apiToken;

const fetchJson = (url, options, auth = false, isJson = true) => {
  let promise = new Promise((resolve, reject) => {
    let headersObj = { ...jsonHeaders() };
    if (auth) {
      let token = ''; //getToken(store.getState());
      headersObj = { ...headersObj, ...authHeaders(token) };
    }
    let opts = { headers: headersObj, ...options };
    return fetch(url, opts)
      .then(checkStatus)
      .then(toJson)
      .then(response => resolve(response))
      .catch(error   => reject(error));
  });
  return promise;
};

export default fetchJson;

const login = (email, password) => {
  let promise = new Promise((resolve, reject) => {
    let url = `http://localhost:3000/login`;
    let headersObj = { ...loginHeaders(email, password), ...jsonHeaders() };
    let opts = {
      method: 'POST',
      headers: headersObj
    };
    return fetch(url, opts)
      .then(checkStatus)
      .then(getToken)
      .then(toJson)
      .then(user   => resolve({ currentUser: user['toker/user'], token: apiToken }))
      .catch(error => reject(error));
  });
  return promise;
};

const loginWithToken = (token) => {
  let promise = new Promise((resolve, reject) => {
    let url = `http://localhost:3000/login`;
    let headersObj = { ...authHeaders(token), ...jsonHeaders() };
    let opts = {
      method: 'PUT',
      headers: headersObj
    };
    return fetch(url, opts)
      .then(checkStatus)
      .then(getToken)
      .then(toJson)
      .then(user   => resolve({ currentUser: user['toker/user'], token: apiToken }))
      .catch(error => reject(error));
  });
  return promise;
};

export {
  login,
  loginWithToken
};

const toJson = response => {
  const { status } = response;
  if (status === NO_CONTENT) {
    return response;
  } else {
    return response.json();
  }
};

const getToken = response => {
  let authHeader = response.headers.get('Authorization');
  if (authHeader && authHeader.includes('Token ')) {
    apiToken = authHeader.replace('Token ', '');
    window.localStorage.setItem('API-TOKEN', apiToken);
  }
  return response;
};

const checkStatus = response => {
  const { status } = response;
  if (status >= 200 && status < 300) {
    return response;
  }
  return Promise.reject(response);
};

const jsonHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const loginHeaders = (email, password) => ({
  Authorization: "Basic " + btoa(`${email}:${password}`)
});

const authHeaders = (token) => ({
  Authorization: `Token ${token}`
});
