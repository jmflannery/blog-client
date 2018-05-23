import { combineReducers } from 'redux';
import sessions from './sessions';
import posts from './posts';

const rootReducer = combineReducers({
  sessions,
  posts
});

export default rootReducer;
