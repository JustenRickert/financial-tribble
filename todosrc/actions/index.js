import * as types from "../constants/ActionTypes"

export const addTodo = text => ({type: types.ADD_TODO, text})
export const deleteTodo = id => ({type: types.DELETE_TODO, id})
export const editTodo = (id, text) => ({type: types.EDIT_TODO, id, text})
export const completeTodo = id => ({type: types.COMPLETE_TODO, id})
export const completeAll = () => ({type: types.COMPLETE_ALL})
export const clearCompleted = () => ({type: types.CLEAR_COMPLETED})

export const addRate = (text, amount) => ({type: types.ADD_RATE, text, amount})
export const deleteRate = id => ({type: types.ADD_RATE, id})
