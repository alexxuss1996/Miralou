import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';

type CounterState = { productCount: number };

const initialState: CounterState = { productCount: 1 };

export const productQuantitySlice = createSlice({
  name: 'productQuantity',
  initialState,
  reducers: {
    increment(state: Draft<CounterState>) {
      state.productCount++;
    },
    decrement(state: Draft<CounterState>) {
      state.productCount--;
    },
    setCount(state: Draft<CounterState>, action: PayloadAction<number>) {
      state.productCount = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = productQuantitySlice.actions;

export default productQuantitySlice.reducer;
