import * as actions from '../actions/posts';

const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case actions.POSTS_RECEIVED:
      return action.posts;
    case actions.POST_ADDED:
      return [
        ...state,
        action.post
      ];
    default:
      return state;
  }
};

export default posts;
