import {combineReducers} from "redux"

import rates from "./rates"
import range from "./range"

const rootReducer = combineReducers({rates, range})

export default rootReducer
