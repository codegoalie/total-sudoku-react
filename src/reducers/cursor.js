const cursor = (state = 2, action) => {
  switch(action.type) {
    case "GO_LEFT":
      if (state % 9 === 0) {

      }
      break
    case "GO_RIGHT":
      break
    case "GO_DOWN":
      break
    case "GO_UP":
      break
    default:
      return state;
  }
}
export default cursor
