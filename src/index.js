import React from "react"
import {render} from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import * as _ from "lodash"

import App from "./containers/App"
import reducer from "./reducers"
import "./index.css"

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) return undefined
    else return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (err) {
    // ignore errors
  }
}

const persistedState = loadState()
const store = createStore(reducer, persistedState)

store.subscribe(
  _.throttle(() => {
    saveState(store.getState())
  }, 1000)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
