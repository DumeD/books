import { combineReducers } from 'redux';
import booksApiReducer from './booksApiReducer';

const rootReducer = combineReducers({
  fetchBooks: booksApiReducer
});

export default rootReducer;
