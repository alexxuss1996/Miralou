import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type ProductResponseType = {
  created_at: string;
  name: string;
  image_thumb_url: string;
  images: string[];
  price: string;
  discount_percent: string;
  description: string;
  category: string;
  code: string;
  tags: string[];
  rating: string;
  reviews?: Review[];
  popularity: string;
  brand: string;
  id: string;
};

export type Review = {
  id: string;
  name: string;
  personal_rating?: string;
  comment: string;
  date?: string;
};

export const miralouApi = createApi({
  reducerPath: 'miralouApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6409c1bcd16b1f3ed6dbf3b5.mockapi.io/api/v1/',
  }),
  tagTypes: ['product', 'article'],
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

export const { useGetProductQuery, useGetProductsQuery } = miralouApi;
