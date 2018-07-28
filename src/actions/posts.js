import config from '../config';
import fetchJson from '../fetch-json';
import { getToken } from '../selectors/sessions';

const POSTS_RECEIVED = 'POSTS_RECEIVED';
const POST_ADDED = 'POST_ADDED';
const POST_SELECTED = 'POST_SELECTED';
const POST_UPDATED = 'POST_UPDATED';

const postsReceived = (posts) => ({
  type: POSTS_RECEIVED,
  posts
});

const postAdded = (post) => ({
  type: POST_ADDED,
  post
});

const selectPost = (slug=null, navigate=true) => ({
  type: POST_SELECTED,
  slug
});

const postUpdated = (post) => ({
  type: POST_UPDATED,
  post
});

const fetchPosts = () => {
  return (dispatch, getState) => {
    let url = `${config.protocol}://${config.apiDomain}/posts`;
    let token = getToken(getState());
    return fetchJson(url, { method: 'GET' }, token)
      .then(response => {
        return dispatch(postsReceived(response.posts))
      });
  };
};

const createPost = (title, slug, content) => {
  return (dispatch, getState) => {
    let url = `${config.protocol}://${config.apiDomain}/posts`;
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

const publishPost = postId => {
  return (dispatch, getState) => {
    let url = `${config.protocol}://${config.apiDomain}/posts/${postId}/publish`;
    let token = getToken(getState());
    return fetchJson(url, {
      method: 'PUT'
    }, token)
      .then(response => {
        return dispatch(postUpdated(response.post))
      });
  };
};

const unpublishPost = postId => {
  return (dispatch, getState) => {
    let url = `${config.protocol}://${config.apiDomain}/posts/${postId}`;
    let token = getToken(getState());
    return fetchJson(url, {
      method: 'PATCH',
      body: JSON.stringify({
        published_at: null
      })
    }, token)
      .then(response => {
        return dispatch(postUpdated(response.post))
      });
  };
};

export {
  POSTS_RECEIVED,
  POST_ADDED,
  POST_SELECTED,
  POST_UPDATED,
  postsReceived,
  fetchPosts,
  createPost,
  selectPost,
  publishPost,
  unpublishPost
};
