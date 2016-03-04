import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Nav />
      </header>
    );
  }
}
