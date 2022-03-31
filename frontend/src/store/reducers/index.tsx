import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "../features/cartSlice";

const reducer = combineReducers({
    cart: CartReducer
})

export default reducer;