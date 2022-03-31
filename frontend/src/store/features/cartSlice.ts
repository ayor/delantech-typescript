import { createSlice, current } from '@reduxjs/toolkit'
import {ICart, IState} from '../../interfaces';

 
const initialState :IState = {
  items: [] ,
  totalPrice: 0  
}

const calculcateTotal = (state:IState ):void => {
  let total = 0;
  state.items.forEach((item:ICart) => total += (item.price * item.qty));
  state.totalPrice = total;
}

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {

    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    decrement: (state:IState, action) => {
      state.items.forEach(item => {
        if (item.id === action.payload) {
          if (item.qty <= 1) { return; }
          item.qty -= 1;
        }
      })
      calculcateTotal(state);
    },
    increment: (state:IState, action) => {

      state.items.forEach(item => {
        if (item.id === action.payload) {

          item.qty += 1;
        }
      });

      calculcateTotal(state);

    },
    deleteCartItem: (state:IState, action) => {

      const newState = state.items.filter(item => item.id !== action.payload);
      state.items = [...newState]
      calculcateTotal(state);
    },
    updateQty: (state:IState, action) => {

      if (action.payload.qty <= 0) {
        return;
      }
      state.items.forEach(item => {
        if (item.id === action.payload.id) {
          item.qty = action.payload.qty;
        }
      });
      calculcateTotal(state);
    },
    addToCart: (state: IState, action) => {
        console.log(current(state))
      let data = {
        ...action.payload,
        qty: 1
      };
      let _state = [...current(state).items];
      debugger;
      let cartItem = _state.find(item => item.id === data.id);
      if (cartItem) {
        state.items.forEach(item => {
          if (item.id === data.id) {
            item.qty += 1
          }
        })

      } else {
        state.items.push(data);
      }
      calculcateTotal(state);

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrement, deleteCartItem, increment, updateQty } = cartSlice.actions

export default cartSlice.reducer;