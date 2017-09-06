import {combineReducers} from "redux"

import account from "./account"
import rates from "./rates"
import range from "./range"

const rootReducer = combineReducers({account, rates, range})

export default rootReducer
