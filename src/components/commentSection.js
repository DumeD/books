import React, { Component } from 'react';

import PopularBook from './popularBook';
import CommentList from './commentList';

export default class CommentSection extends Component {
  render() {
    return (
      <div className='comment-section'>
        <PopularBook />
        <CommentList />
      </div>
    );
  }
}
