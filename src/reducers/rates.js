const initialState = [{id: 0, text: "income", amount: 1000, recurrence: 14},
                      {id: 1, text: 'rent', amount: -500, recurrence: 30},
                      {id: 2, text: 'food', amount: 60, recurrence: 7}]

export default function rates(state = initialState, action) {
  switch (action.type) {
    case "ADD_RATE":
      return [
        {
          id: state.reduce((maxId, rate) => Math.max(rate.id, maxId), -1) + 1,
          text: action.text,
          amount: parseFloat(action.amount),
          recurrence: parseInt(action.recurrence)
        },
        ...state
      ]

    case "EDIT_RATE":
      return state.map(
        rate =>
          rate.id === action.id
            ? {
                ...rate,
                text: action.text,
                amount: parseFloat(action.amount),
                recurrence: parseInt(action.recurrence)
              }
            : rate
      )

    case "DELETE_RATE":
      state = state.filter(rate => rate.id !== action.id)
      return state

    default:
      return state
  }
}
