const NO_CONTENT = 204;

const fetchJson = (url, options, auth = false, isJson = true) => {
  // let token = getToken(store.getState());
  let promise = new Promise((resolve, reject) => {
    let headerParams = options.headers || {};
    delete options.headers;
    let headersObj = { ...headers(auth, isJson).headers, ...headerParams };
    let opts = { headers: headersObj, ...options };
    return fetch(url, opts)
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
  let token;
  let authHeader = response.headers.get('Authorization');
  if (authHeader && authHeader.includes('Token ')) {
    token = authHeader.replace('Token ', '');
  }
  // TODO: get token into redux store
  console.log('Token:');
  console.log(token);
  const { status } = response;
  if (status >= 200 && status < 300) {
    return response;
  }
  return Promise.reject(response);
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
