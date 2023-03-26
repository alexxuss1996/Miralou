import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PaginationState = {
  currentPage: number;
  perPage: number;
  numberOfPages: number;
};

const initialState: PaginationState = {
  currentPage: 1,
  perPage: 12,
  numberOfPages: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    incrementCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    decrementCurrentPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    setNumberOfPages: (state, action: PayloadAction<number>) => {
      state.numberOfPages = action.payload;
    },
    resetNumberOfPages: (state) => {
      state.numberOfPages = 0;
    },
  },
});

export const {
  setCurrentPage,
  resetCurrentPage,
  incrementCurrentPage,
  decrementCurrentPage,
  setNumberOfPages,
  resetNumberOfPages,
} = paginationSlice.actions;

export default paginationSlice.reducer;
