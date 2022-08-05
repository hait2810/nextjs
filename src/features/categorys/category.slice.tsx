import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategorys , AddCategory, DeleteCategory} from "../../../api/categorys";
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
export const AddCategorys = createAsyncThunk("category/AddCategory", async (category : Icategory) =>{
            const res = await AddCategory(category)
            return res;
})
export const DeleteCategorys = createAsyncThunk("category/DeleteCategory", async (id : any) =>{
    const res = await DeleteCategory(id);
    return res;
})
const cateogorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getCategory.fulfilled,(state,{payload}) => {
            state.categorys = payload||[]
        }),
        build.addCase(AddCategorys.fulfilled,(state,{payload})=>{
            state.categorys.push(payload as Icategory) 
        }),
        build.addCase(DeleteCategorys.fulfilled,(state,{payload})=>{
            state.categorys = state.categorys.filter((item) => item._id !== payload?.id)
        })
    }

})
export default cateogorySlice.reducer