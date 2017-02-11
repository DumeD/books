import React, { Component } from 'react';

import Navbar from './navbar';
import Searchbar from './searchbar';

import '../reset.css';
import '../styles.css';

export default class App extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Navbar />
        <Searchbar />
      </div>
    );
  }
}
