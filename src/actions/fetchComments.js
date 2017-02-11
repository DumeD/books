import axios from 'axios';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export default function fetchComments() {
  var request = axios.get('http://localhost:8080/api/comments');

  return {
    type: FETCH_COMMENTS,
    payload: request
  }
}
