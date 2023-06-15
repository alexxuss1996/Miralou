import { ProductResponseType } from '@/store/services/api/miralouApi';
import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';

type ProductsState = {
  categories: string[];
  brands: string[];
  priceRange: string;
  sortBy: string;
  currentProductsCount: number;
};

const initialState: ProductsState = {
  categories: [],
  brands: [],
  priceRange: 'all',
  sortBy: 'none',
  currentProductsCount: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategories: (state: Draft<ProductsState>, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setBrands: (state: Draft<ProductsState>, action: PayloadAction<string[]>) => {
      state.brands = action.payload;
    },
    setPriceRange: (state: Draft<ProductsState>, action: PayloadAction<string>) => {
      state.priceRange = action.payload;
    },
    setSortBy: (state: Draft<ProductsState>, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setProductsCount: (state: Draft<ProductsState>, action: PayloadAction<number>) => {
      state.currentProductsCount = action.payload;
    },
  },
});

export const { setCategories, setBrands, setPriceRange, setSortBy, setProductsCount } =
  productsSlice.actions;
export default productsSlice.reducer;
