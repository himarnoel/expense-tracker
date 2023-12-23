import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUri="http://localhost:9000"
export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUri}),
    endpoints:builder=>({
        //get categories
        getCategories:builder.query({
            query:()=>'/api/categories'
        }),
         //get labels
        getLabels:builder.query({
            query:()=>'/api/labels'
        }),
          //create new transaction
        addNewTransaction:builder.mutation ({
            query:(initialTransaction)=>({
                url:'/api/transaction',
                method:"POST",
                body:initialTransaction
            })
        }),
           //deleteTransaction:
           deleteTrasaction:builder.mutation ({
            query:(recordld)=>({
                url:'/api/transaction',
                method:"DELTE",
                body:recordld
            })
        }),
        
    })
})

export  default apiSlice;

