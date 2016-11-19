// const initialState = [...Array(81).keys()].map((i) => {
//   return i % 9;
// });
//

function initialCell(number) {
  return {
    initialValue: number,
    currentValue: number,
    valid: true,
  }
}

function initialState() {
  return [6, 0, 0, 7, 2, 4, 0, 1, 0, 8, 0, 0, 1, 3, 0, 0, 0, 6, 0, 0, 1,
          6, 5, 8, 3, 0, 0, 0, 5, 6, 4, 0, 3, 9, 8, 0, 0, 0, 3, 0, 0, 0,
          4, 7, 0, 0, 0, 0, 5, 9, 2, 0, 0, 3, 3, 0, 0, 2, 4, 5, 7, 9, 1,
          2, 1, 9, 3, 8, 7, 6, 5, 4, 5, 4, 0, 9, 1, 6, 2, 3, 8].map(initialCell)
}

const grid = (state = initialState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
}
export default grid
