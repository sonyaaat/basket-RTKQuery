import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://' }),
  tagTypes:["menu","basket"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `62becfba0bc9b125615fd0f7.mockapi.io/api/products?page=1&limit=10`,
      providesTags:["menu"]
    }),
    getBasket:builder.query({
        query:()=>'62becfba0bc9b125615fd0f7.mockapi.io/api/carts',
        providesTags:["basket"]
    }),
    addToBasket:builder.mutation({
        query: (values) => ({
            url: `62becfba0bc9b125615fd0f7.mockapi.io/api/carts`,
            method: 'POST',
            body: values,
          }),
          invalidatesTags:["basket"]
    }),
    deleteFromBasket:builder.mutation({
        query: (id) => ({
            url: `62becfba0bc9b125615fd0f7.mockapi.io/api/carts/${id}`,
            method: 'DELETE',
          }),
          invalidatesTags:["basket"]
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery,useGetBasketQuery,useAddToBasketMutation,useDeleteFromBasketMutation} = productsApi