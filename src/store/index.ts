import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { miralouApi } from '@/store/services/api/miralouApi';
import productsSlice from '@/store/slices/products/productsSlice';
import paginationSlice from '@/store/slices/pagination/paginationSlice';
import productQuantitySlice from '@/store/slices/products/productQuantitySlice';
import cartSlice from '@/store/slices/cart/cartSlice';

export const store = configureStore({
  reducer: {
    [miralouApi.reducerPath]: miralouApi.reducer,
    products: productsSlice,
    pagination: paginationSlice,
    productQuantity: productQuantitySlice,
    cart: cartSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(miralouApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
