import React, { Component } from 'react';
import './HelloMessage.css';

class HelloMessage extends Component {
  render() {
    return (
      <div>
        <h1>Hello my name is <span>{this.props.name}</span></h1>
      </div>
    )
  }
}

export default HelloMessage;
