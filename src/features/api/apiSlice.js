import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from "../../utils/constants";
import { buildUrl } from '../../utils/common';



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduc: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: (params) => buildUrl("/products", params),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProducQuery, useGetProductsQuery  } = apiSlice;