import fetchJson from '../fetch-json';
import { getToken } from '../selectors/sessions';

const POSTS_RECEIVED = 'POSTS_RECEIVED';
const POST_ADDED = 'POST_ADDED';

const postsReceived = (posts) => ({
  type: POSTS_RECEIVED,
  posts
});

const postAdded = (post) => ({
  type: POST_ADDED,
  post
});

const fetchPosts = () => {
  return (dispatch, getState) => {
    let url = `http://localhost:3000/posts`;
    let token = getToken(getState());
    return fetchJson(url, { method: 'GET' }, token)
      .then(response => {
        return dispatch(postsReceived(response.posts))
      });
  };
};

const createPost = (title, slug, content) => {
  return (dispatch, getState) => {
    let url = `http://localhost:3000/posts`;
    let token = getToken(getState());
    return fetchJson(url, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        slug: slug,
        content: content
      })
    }, token)
      .then(response => {
        return dispatch(postAdded(response.post))
      });
  };
};

export {
  POSTS_RECEIVED,
  POST_ADDED,
  postsReceived,
  fetchPosts,
  createPost
};
