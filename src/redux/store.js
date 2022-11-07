import {createStore} from "redux"
import goodsReducer from "./reducer"

export const store = createStore(goodsReducer)

