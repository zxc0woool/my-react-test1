import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import a from './A';

class B extends Component {
  render() {
    return (
      <div>
        我是B组件
      </div>
    );
  }
}   

export default a(B);
