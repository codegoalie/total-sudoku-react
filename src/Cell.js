import React, { Component } from 'react';
import './Cell.css'

export default class Cell extends Component {
  componentDidMount() {
    if (this.props.shouldFocus) {
      this.textInput.focus()
    }
  }

  render() {
    if (this.props.value === 0) {
      return (
        <input
          id={this.props.index}
          type="text"
          onKeyUp={(event) => this.props.keyHandler(event, this.props.index)}
          ref={(input) => this.textInput = input}
        />
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
