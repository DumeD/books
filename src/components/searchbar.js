import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchApiBook';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  makeSearch(e) {
    e.preventDefault();
    this.props.fetchBooks(this.state.term);
    this.setState({ term: '' });
  }
  onChange(e) {
    this.setState({ term: e.target.value });
  }
  render() {
    return (
      <form onSubmit={this.makeSearch.bind(this)} className='searchbar'>
        <input placeholder='Search Books' className='input' onChange={this.onChange.bind(this)} value={this.state.term}/>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.fetchBooks };
}

export default connect(mapStateToProps, { fetchBooks })(Searchbar);
