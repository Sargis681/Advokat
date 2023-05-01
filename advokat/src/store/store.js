import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./formSlices/formSlices";
import { dateReducer } from "./dateSlices/dateSlices";
import { contentReducer } from "./contentSlices/contentSlices";



const store = configureStore({
    reducer: {
        form:formReducer,
        date:dateReducer,
        content:contentReducer
       
    }
})

export default store