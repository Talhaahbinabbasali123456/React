import React, { Component } from 'react';
import './App.css';
import sideNaveClose from'./sidenavclose';


class NavEle extends Component {
  render() {
    return (
      <a className='nav-tab' onClick={sideNaveClose} href={this.props.link} title={this.props.title}>{this.props.linkText}</a>
    )
  }
}

export default NavEle;

