import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUri="http://localhost:9000"
export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUri}),
    endpoints:builder=>({
        getCategories:builder.query({
            query:()=>'/api/categories'
        })
    })
})

export  default apiSlice;

