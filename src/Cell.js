import React, { Component } from 'react';
import './Cell.css'

export default class Cell extends Component {
  render() {
    if (this.props.value === 0) {
      return (
        <input type="text"  />
      )
    } else {
      return (
        <input
          type="text"
          className="initial"
          readOnly
          value={this.props.value}
        />
      )
    }
  }
}
