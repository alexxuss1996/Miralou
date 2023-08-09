import { ProductType } from '@/components/features/ProductsItem';
import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';

export type CartItemType = ProductType & {
  amount: number;
};
export type CartStateType = {
  cartItems: CartItemType[] | [];
  totalPrice: number;
  totalItems: number;
};

const initialState: CartStateType = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    calculateTotals: (state: Draft<CartStateType>) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        let price: number = item?.productDiscountPercent
          ? item.productPrice - (item.productPrice * item.productDiscountPercent) / 100
          : item.productPrice;
        price = price.toFixed(2) as unknown as number;
        amount += item?.amount;
        total += item?.amount * price;
      });
      state.totalPrice = total;
      state.totalItems = amount;
    },
    addToCart: (state: Draft<CartStateType>, action: PayloadAction<CartItemType>) => {
      const existingCartItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingCartItem) {
        existingCartItem.amount += 1;
      } else {
        (state.cartItems as CartItemType[]).push(action.payload);
      }

      state.totalItems += 1;
    },
    removeFromCart: (state: Draft<CartStateType>, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.productId !== itemId);
      state.totalItems -= 1;
    },

    increaseAmount: (
      state: Draft<CartStateType>,
      { payload }: PayloadAction<{ productId: string }>
    ) => {
      const cartItem = state.cartItems.find((item) => item.productId === payload.productId);
      cartItem!.amount += 1;
    },
    decreaseAmount: (
      state: Draft<CartStateType>,
      { payload }: PayloadAction<{ productId: string }>
    ) => {
      const cartItem = state.cartItems.find((item) => item.productId === payload.productId);
      cartItem!.amount -= 1;
    },
    clearCart: (state: Draft<CartStateType>) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export default cartSlice.reducer;
export const {
  calculateTotals,
  removeFromCart,
  addToCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = cartSlice.actions;
