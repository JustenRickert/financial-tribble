const initialState = [{text: "income", amount: 1000, recurrence: 14}]

export default function rates(state = initialState, action) {
  switch (action.type) {
    case "ADD_RATE":
      return [
        {
          id: state.reduce((maxId, rate) => Math.max(rate.id, maxId), -1) + 1,
          text: action.text,
          amount: action.amount,
          recurrence: action.recurrence
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
                amount: action.amount,
                recurrence: action.recurrence
              }
            : rate
      )

    case "DELETE_RATE":
      return state.filter(rate => rate.id !== action.id)

    default:
      return state
  }
}
