import React from 'react';
import Cell from './Cell';
import './Grid.css';

export default function Grid(props) {
  const nums = props.grid.map((v, i) => <Cell key={i} {...v} />)
  return (
    <div className="grid" >{nums}</div>
  )
}

Grid.propTypes = {
  grid: React.PropTypes.arrayOf(),
}
