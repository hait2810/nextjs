import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {createProduct, getProducts} from '../../../api/product'
import { Iproduct } from "../../../models/product";

interface IProductState {
        product: Iproduct | {},
        products:Iproduct[]
}

const initialState: IProductState = {
        product: {},
        products:[]
}


export const addProduct  = createAsyncThunk("product/create", async (product: Iproduct) => {
            const res = await createProduct(product)
            return res;
})
export const listProducts = createAsyncThunk("product/list", async () => {
    const res = await getProducts()
    return res;
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(addProduct.fulfilled,(state,{payload}) => {
            state.products.push(payload as Iproduct)
        }),
        build.addCase(listProducts.fulfilled,(state,{payload}) => {
            state.products = payload || []
        })
    }
})
export default productSlice.reducer