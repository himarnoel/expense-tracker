import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  categoriesInterface,
  createTransaction,
  labelsinterface,
} from "../Service/interfaces";
const baseUri = "http://localhost:9000";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUri }),
  tagTypes: ["categories", "transaction"],
  endpoints: (builder) => ({
    //get categories

    getCategories: builder.query<Array<categoriesInterface>, void>({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    //get labels
    getLabels: builder.query<Array<labelsinterface>, void>({
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),
    //create new transaction
    addNewTransaction: builder.mutation<createTransaction, createTransaction>({
      query: (initialTransaction) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),
    //deleteTransaction:
    deleteTransaction: builder.mutation({
      query: (recordld) => ({
        url: "/api/transaction",
        method: "DELETE",
        body: recordld,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
