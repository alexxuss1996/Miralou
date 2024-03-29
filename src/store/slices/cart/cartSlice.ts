import { ProductType } from '@/components/features/ProductsItem';
import { getCurrentPrice } from '@/helpers';
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
        const currentPrice: number = getCurrentPrice(
          item.productPrice,
          item.productDiscountPercent
        ).toFixed(2) as unknown as number;
        amount += item?.amount;
        total += item?.amount * currentPrice;
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
      const currentPrice: number = getCurrentPrice(
        cartItem!.productPrice,
        cartItem!.productDiscountPercent
      );
      cartItem!.amount += 1;
      state.totalItems += 1;
      state.totalPrice += currentPrice;
    },
    decreaseAmount: (
      state: Draft<CartStateType>,
      { payload }: PayloadAction<{ productId: string }>
    ) => {
      const cartItem = state.cartItems.find((item) => item.productId === payload.productId);
      const currentPrice: number = getCurrentPrice(
        cartItem!.productPrice,
        cartItem!.productDiscountPercent
      );
      cartItem!.amount -= 1;
      state.totalItems -= 1;
      state.totalPrice -= currentPrice;
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
