import React, { Component } from 'react';



const a = (MrappdeComponent) => class A extends Component {
  render() {
    return (
      <div>
        我是A组件 父亲
        <MrappdeComponent />
      </div>
    );
  }
}   

export default a;
