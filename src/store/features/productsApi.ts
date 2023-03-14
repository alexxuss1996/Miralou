import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ProductResponseType = {
  created_at: Date;
  name: string;
  image_url: string;
  price: string;
  discount_percent: string;
  description: string;
  category: string;
  code: string;
  tags: string[];
  rating: string;
  popularity: string;
  brand: string;
  id: string;
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6409c1bcd16b1f3ed6dbf3b5.mockapi.io/api/v1/',
  }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponseType[], void>({
      query: () => ({
        url: `/products`,
      }),
    }),
    getProduct: builder.query<ProductResponseType, string>({
      query: (id: string) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productsApi;
