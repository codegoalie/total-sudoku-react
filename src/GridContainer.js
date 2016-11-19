import { connect } from 'react-redux';
import Grid from './Grid.js';
import { moveCursorDownFrom, moveCursorRightFrom, moveCursorLeftFrom, moveCursorUpFrom } from './actions/cursor.js'

function moveCursor(event, index) {
  switch (event.key) {
    case 'ArrowLeft':
    case 'h':
      event.preventDefault()
      return moveCursorLeftFrom(index)
    case 'ArrowRight':
      case 'l':
      event.preventDefault()
      return moveCursorRightFrom(index)
    case 'ArrowUp':
    case 'k':
      event.preventDefault()
      return moveCursorUpFrom(index)
    case 'ArrowDown':
    case 'j':
      event.preventDefault()
      return moveCursorDownFrom(index)
    default:
      break
  }
}

const mapStateToProps = (state) => {
  return {
    grid: state.grid,
    cursor: state.cursor
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveCursor: (event) => {
      dispatch(moveCursor(event))
    }
  }
}

const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);
export default GridContainer
