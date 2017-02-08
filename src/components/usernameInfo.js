import React, { Component } from 'react';

export default class UsernameInfo extends Component {
  submitUsername() {

  }
  render() {
    return (
      <form className='username-info' onSubmit={this.submitUsername.bind(this)}>
        <input placeholder='Choose Username' className='input'/>
        <input className='username-btn' value='Done' type='submit'/>
      </form>
    );
  }
}
