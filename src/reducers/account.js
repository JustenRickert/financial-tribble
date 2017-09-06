import uuidv1 from "uuid/v1"

const initialState = [
  {
    name: "assets",
    transactions: [
      {id: uuidv1(), date: "2017/09/01", amount: 12},
      {id: uuidv1(), date: "2017/09/02", amount: 13}
    ]
  },
  {
    name: "expenses",
    transactions: [{id: uuidv1(), date: "2017/09/01", amount: 20}]
  }
]

export default function account(state = initialState, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return state.map(st => {
        if (st.name === action.name)
          st.transactions.push({
            id: uuidv1(),
            date: action.date,
            amount: action.amount
          })
        return st
      })

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
