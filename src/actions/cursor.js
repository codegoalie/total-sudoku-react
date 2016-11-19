export const CURSOR_LEFT = 'CURSOR_LEFT'
export const CURSOR_RIGHT = 'CURSOR_RIGHT'
export const CURSOR_UP = 'CURSOR_UP'
export const CURSOR_DOWN = 'CURSOR_DOWN'

export function moveCursorLeftFrom(index) {
  return { type: CURSOR_LEFT, index: index }
}

export function moveCursorRightFrom(index) {
  return { type: CURSOR_RIGHT, index: index }
}

export function moveCursorUpFrom(index) {
  return { type: CURSOR_UP, index: index }
}

export function moveCursorDownFrom(index) {
  return { type: CURSOR_DOWN, index: index }
}
