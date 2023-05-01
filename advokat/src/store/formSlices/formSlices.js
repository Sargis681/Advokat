import { createSlice } from "@reduxjs/toolkit";

const formSlices=createSlice({
    name:"form",
    initialState:[],
    reducers:{
        addSearch(state,{payload}){
            // console.log(payload);
            return[
                ...state,
                payload
               
                
            ] 
                
        },

    },
})
export const selectForm = state => state.form
export const formReducer = formSlices.reducer
export const {addSearch} = formSlices.actions