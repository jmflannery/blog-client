import * as actions from '../actions/posts';

const initialState = {
  all: [],
  selected: null
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case actions.POSTS_RECEIVED:
      return {
        ...state,
        all: action.posts
      };
    case actions.POST_ADDED:
      return {
        ...state,
        all: [
          ...state.all,
          action.post
        ]
      };
    case actions.POST_SELECTED:
      return {
        ...state,
        selected: action.slug
      };
    default:
      return state;
  }
};

export default posts;
