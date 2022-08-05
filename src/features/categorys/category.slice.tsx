import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategorys , AddCategory, DeleteCategory, UpdateCategory, getCategoryId} from "../../../api/categorys";
import { Icategory } from "../../../models/categorys";



interface IProductState {
        category: Icategory | {},
        categorys:Icategory[]
}

const initialState: IProductState = {
    category: {},
        categorys:[]
}


export const getCategory  = createAsyncThunk("category/getlist", async () => {
            const res = await getCategorys()
            return res;
})
export const createCategory = createAsyncThunk("category/create", async (category:any) => {
            const res = await AddCategory(category)
            return res;
})
export const DeleteCategorys = createAsyncThunk("category/remove", async (id : any) => {
    const res = await DeleteCategory(id);
    return res;
})
export const editCategory = createAsyncThunk("category/edit", async ( datacate : any) => {
    const res = await UpdateCategory(datacate);
    return res;
})
export const getCategorysId = createAsyncThunk("category/getCategoryId", async ( id : any) => {
    const res = await getCategoryId(id);
    return res;
})
    


const cateogorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled,(state,{payload}) => {
            state.categorys = payload as any
        }),
        builder.addCase(createCategory.fulfilled,(state,{payload}) => {
            state.categorys.push(payload as any) 
        }),
        builder.addCase(DeleteCategorys.fulfilled,(state,{payload})=>{
            state.categorys = state.categorys.filter((item) => item._id !== payload.id)
            
            
        }),
        builder.addCase(editCategory.fulfilled,(state,{payload})=>{
            state.categorys=state.categorys=state.categorys.map((item)=>(item._id === payload?.id ? payload :item!)) as Icategory[]
        }),
        builder.addCase(getCategorysId.fulfilled,(state,{payload})=>{
            state.category = payload 
        })
    }

})
export default cateogorySlice.reducer