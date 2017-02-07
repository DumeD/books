import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchApiBook';

class App extends Component {
  constructor(props) {
    super(props);
    this.books = this.books.bind(this);
  }
  componentWillMount() {
    this.props.fetchBooks('zero to one');
  }
  books() {
    return this.props.books.items.map(item => {
      return <p>{item.id}</p>
    });
  }
  render() {
    return (
      <div>{this.books()}</div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.fetchBooks }
}

export default connect(mapStateToProps, { fetchBooks })(App);
