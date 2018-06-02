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
    case actions.POST_UPDATED:
      return {
        ...state,
        all: state.all.map(post => {
          if (post.id === action.post.id) {
            return action.post;
          }
          return post;
        })
      }
    default:
      return state;
  }
};

export default posts;
