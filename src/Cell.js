import React, { Component } from 'react';
import './Cell.css'

export default class Cell extends Component {
  render() {
    return (
      <input type="text" readOnly value={this.props.value} />
    )
  }
}
