import { connect } from 'react-redux';
import Grid from './Grid.js';

const mapStateToProps = (state) => {
  return {
    grid: state.grid
  }
}

const GridContainer = connect(mapStateToProps)(Grid);
export default GridContainer
