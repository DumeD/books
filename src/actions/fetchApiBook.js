import axios from 'axios';

const FETCH_BOOKS = 'FETCH_BOOKS';

let baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
let apiKey = '';

export default function fetchBooks(bookSearched) {
  let request = axios.get(`${baseURL}${bookSearched}&key=${apiKey}`);
  console.log(request);
  return {
    type: FETCH_BOOKS,
    payload: request
  };
}
