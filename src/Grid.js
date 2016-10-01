import React, { Component } from 'react';
import Cell from './Cell.js';
import './Grid.css';

export default class Grid extends Component {
  render() {
    var nums = this.props.grid.map((i) => {
      return (
        <Cell key={i} value={i+1} />
      );
    });
    return (
      <div className="grid" >{nums}</div>
    )
  }
}
