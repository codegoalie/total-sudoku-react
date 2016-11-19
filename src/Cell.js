import React from 'react'
import './Cell.css'

function Cell(props) {
  if (props.initialValue === 0) {
    return (
      <input
        className={props.valid ? '' : 'error'}
        type="text"
        value={props.currentValue === 0 ? '' : props.currentValue}
      />
    )
  }
  return (
    <input
      type="text"
      className="initial"
      readOnly
      value={props.currentValue}
    />
  )
}
export default Cell

Cell.propTypes = {
  initialValue: React.PropTypes.number,
  currentValue: React.PropTypes.number,
  valid: React.PropTypes.bool,
}
