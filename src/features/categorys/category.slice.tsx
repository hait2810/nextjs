import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategorys } from "../../../api/categorys";
import { Icategory } from "../../../models/categorys";



interface IProductState {
        category: Icategory | {},
        categorys:Icategory[]
}

const initialState: IProductState = {
    category: {},
        categorys:[]
}


export const getCategory  = createAsyncThunk("category/getcategorys", async () => {
            const res = await getCategorys()
            return res;
})


const cateogorySlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getCategory.fulfilled,(state,{payload}) => {
            state.categorys = payload||[]
        })
    }
})
export default cateogorySlice.reducer