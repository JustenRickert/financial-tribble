export const addRate = (text, amount, recurrence) => ({
  type: "ADD_RATE",
  text,
  amount,
  recurrence
})
export const editRate = (id, text, amount, recurrence) => ({
  type: "EDIT_RATE",
  id,
  text,
  amount,
  recurrence
})
export const deleteRate = id => ({type: "DELETE_RATE", id})

/** name is the name of the account */
export const addTransaction = (name, date, amount) => ({
  type: "ADD_TRANSACTION",
  name,
  date,
  amount
})
export const editTransaction = (name, id, date, amount) => ({
  type: "ADD_TRANSACTION",
  name,
  id,
  date,
  amount
})

export const deleteTransaction = (name, id) => ({
  type: "DELETE_TRANSACTION",
  name,
  id
})

export const editStartRange = x => ({type: "EDIT_START_RANGE", x})
export const editEndRange = y => ({type: "EDIT_END_RANGE", y})
