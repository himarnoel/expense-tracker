import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
const baseUri="http://localhost:8080"
export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUri}),
    endpoints:builder=>({
        getCategories:builder.query({
            query:()=>'/api/categories'
        })
    })
})

export default apiSlice;