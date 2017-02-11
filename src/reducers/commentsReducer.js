import { FETCH_COMMENTS } from '../actions/fetchComments';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      console.log(action.payload.data);
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
