import  {createSlice} from '@reduxjs/toolkit'

interface initialstates{
    categories:[],
    transaction:[]
}
const  initialState:initialstates={
    categories:[],
    transaction:[]
}
export const store=createSlice({
    name:"expense",
    initialState,
    reducers:{
        getTransactions:(state)=>{}
    }
})