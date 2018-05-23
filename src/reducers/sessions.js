import * as actions from '../actions/sessions';

const initialState = {
  token: null,
  currentUser: null
};

const sessions = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
        currentUser: action.currentUser
      };
    default:
      return state;
  };
};

export default sessions;
