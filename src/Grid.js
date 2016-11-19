import React, { Component } from 'react';
import Cell from './Cell.js';
import './Grid.css';

export default class Grid extends Component {
  render() {
    var nums = this.props.grid.map((v, i) => {
      return (
        <Cell
          key={i}
          value={v}
          keyHandler={this.props.moveCursor}
          shouldFocus={i === this.props.cursor}
        />
      );
    });
    return (
      <div className="grid" >{nums}</div>
    )
  }
}
