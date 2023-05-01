import { createSlice } from "@reduxjs/toolkit";

const contentSlices=createSlice({
    name:"content",
    initialState:{
        ToolBarStart:{
            mail:"support@rstheme.com",
            number:"(+123) 456789",
        },
        toolbarContent:{
            help:"Need Any Help",
            right:"We Fight Right",
            pleasure:"We denounce with righteous indignation and dislike men who arebeguiled and demoralized by the charms of pleasure.",
        },
        PracticeAreas:[
            {
                id:new Date().getDate().toString(),
                img:"https://rstheme.com/products/html/advokat/images/practice/icons/1.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century.",

            },
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/practice/icons/2.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century.",

            },
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/practice/icons/3.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century.",

            },
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/practice/icons/4.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century.",

            },
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/practice/icons/5.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century.",

            },
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/practice/icons/6.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century.",

            }
        ],
        ServiceBox:[
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/services/icons/1.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century."
            },
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/services/icons/2.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century."
            },
            {
                id:new Date().getTime().toString(),
                img:"https://rstheme.com/products/html/advokat/images/services/icons/3.png",
                h4:"100% Success Rate",
                span:"Creation timelines for the standard best service passage vary, with some citing the 15th century."
            },
        ],
        click:[
            {
                a:"Q. 1 : Why should I trust your firm for my case",
                case:false,
                id:"1",
                aTwo:"barlus"
            },
            {
                a:"Q. 1 : Why should I trust your firm for my case",
                case:false,
                id:"2",
                aTwo:"barlus"

            },
            {
                a:"Q. 1 : Why should I trust your firm for my case",
                case:false,
                id:"3",
                aTwo:"barlus"

            },
            {
                a:"Q. 1 : Why should I trust your firm for my case",
                case:false,
                id:"4",
                aTwo:"barlus"

            }
        ]

        



    },
    reducers:{
        redFill(state, { payload }) {
            return {
              ...state,
              click: state.click.map((el) =>
                el.id === payload ? { ...el, case: !el.case } : el
              ),
            };
          },
    }
    
})
export const selectContent = state=>state.content
export const contentReducer=contentSlices.reducer
export const {redFill} = contentSlices.actions
