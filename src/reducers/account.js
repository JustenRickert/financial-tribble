import uuidv1 from "uuid/v1"
import moment from "moment"

const initialState = [
  {
    name: "assets",
    transactions: [
      {id: uuidv1(), date: moment(), amount: 12},
      {id: uuidv1(), date: moment(), amount: 13}
    ]
  },
  {
    name: "expenses",
    transactions: [{id: uuidv1(), date: moment(), amount: 20}]
  }
]

export default function account(state = initialState, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      if (state.every(st => st.name !== action.name)) {
        state.push({
          name: action.name,
          transactions: [
            {
              id: uuidv1(),
              date: moment(action.date),
              amount: parseInt(action.amount)
            }
          ]
        })
      } else
        return state.map(st => {
          if (st.name === action.name)
            st.transactions.push({
              id: uuidv1(),
              date: moment(action.date),
              amount: parseInt(action.amount)
            })
          return st
        })

    case "EDIT_TRANSACTION":
      let newState = account(state, {...action, type: "DELETE_TRANSACTION"})
      newState = account(state, {
        ...action,
        type: "ADD_TRANSACTION"
      })
      return newState

    case "DELETE_TRANSACTION":
      return state.map(st => {
        if (st.name === action.name)
          st.transactions = st.transactions.filter(tr => tr.id !== action.id)
        return st
      })

    default:
      return state
  }
}
