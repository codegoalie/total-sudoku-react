const cursor = (state = 2, action) => {
  switch(action.type) {
    case "CURSOR_LEFT":
      return 1
    case "CURSOR_RIGHT":
      return 6
    case "CURSOR_DOWN":
      return 8
    case "CURSOR_UP":
      return 10
    default:
      return state;
  }
}
export default cursor
