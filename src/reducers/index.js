import { combineReducers } from 'redux';
import booksApiReducer from './booksApiReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  fetchBooks: booksApiReducer,
  comments: commentsReducer
});

export default rootReducer;
