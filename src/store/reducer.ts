import  {createSlice} from '@reduxjs/toolkit'

interface initialstates{
    categories:[],
    transaction:[]
}
const  initialState:initialstates={
    categories:[],
    transaction:[]
}
export const expenseSlice=createSlice({
    name:"expense",
    initialState,
    reducers:{
        getTransactions:(state:any)=>{}
    }
})

export const {getTransactions}=expenseSlice.actions

export default expenseSlice.reducer;