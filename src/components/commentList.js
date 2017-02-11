import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchComments from '../actions/fetchComments';

class CommentList extends Component {
  componentWillMount() {
    this.props.fetchComments();
  }
  render() {
    return (
      <div className='popular-comments'>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
