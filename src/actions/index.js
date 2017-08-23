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
