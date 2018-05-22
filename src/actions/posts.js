import fetchJson from '../fetch-json';

const POSTS_RECEIVED = 'POSTS_RECEIVED';

const postsReceived = (posts) => ({
  type: POSTS_RECEIVED,
  posts
});

const fetchPosts = () => {
  return dispatch => {
    let url = `http://localhost:3000/posts`;
    return fetchJson(url, { method: 'GET' })
      .then(response => {
        return dispatch(postsReceived(response.posts))
      });
  };
}

export {
  POSTS_RECEIVED,
  postsReceived,
  fetchPosts
}