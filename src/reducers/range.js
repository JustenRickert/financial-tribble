const initialState = {start: 0, end: 40}

export default function range(state = initialState, action) {
  switch (action.type) {
  case "EDIT_END_RANGE":
      return {
        start: action.start,
        end: state.end
      }
  case "EDIT_START_RANGE":
    return {
      start: state.start,
      end: action.end
    }

  default:
    return state
  }
}
