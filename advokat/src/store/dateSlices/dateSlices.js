import { createSlice } from "@reduxjs/toolkit";

const dateSlices=createSlice({
    name:"date",
    initialState:[],
    reducers:{
        dateWiever(state,{payload}){
            console.log(payload);
            return[
                ...state,
                payload
            ]
        }
    }
})

export const selectDate = state => state.date
export const dateReducer = dateSlices.reducer
export const {dateWiever} = dateSlices.actions