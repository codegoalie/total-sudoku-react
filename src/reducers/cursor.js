const cursor = (state = 0, action) => {
  switch(action.type) {
    case "GO_LEFT":
      if (state % 9 === 0) {

    }
    case "GO_RIGHT":
    case "GO_DOWN":
    case "GO_UP":
    default:
      return state;
  }
}
export default grid
