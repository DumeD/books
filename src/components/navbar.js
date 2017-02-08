import React, { Component } from 'react';
import UsernameInfo from './usernameInfo';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <h1 className='navbar-logo'>LOGO</h1>
        <UsernameInfo />
      </nav>
    );
  }
}
