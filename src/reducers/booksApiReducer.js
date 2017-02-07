import { FETCH_BOOKS } from '../actions/fetchApiBook';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      console.log(action.payload.data);
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
