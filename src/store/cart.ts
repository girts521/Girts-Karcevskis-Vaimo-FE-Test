import { createSlice } from "@reduxjs/toolkit";

const initialCartState: any = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      let product;
      //check if cart contains the product
      if (state.cart.length > 0) {
        product = state.cart.find(
          (item: any) => item.option === action.payload.option
        );
      }

      if (product) {
        //if the product was found in cart increment its quantity
        product.value = action.payload.value
      } else {
        //if it was not found then push it to the cart
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      //check if cart contains the product and the quantity is greater than 1
      const product = state.cart.find(
        (item:any) => item.option === action.payload.option
      );
      if(action.payload.remove === true){
        const updatedCart = state.cart.filter(
          (item:any) => item.option != action.payload.option
        );
        state.cart = updatedCart;
        return
      }

      if (product && product.value > 1) {
        product.value -= 1;
      } else if (product && product.value === 1 ) {
        const updatedCart = state.cart.filter(
          (item:any) => item.option != action.payload.option
        );
        state.cart = updatedCart;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
