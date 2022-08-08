import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {createProduct,getProduct, getProducts, getProductsByCategory, removeProduct} from '../../../api/product'
import { Iproduct } from "../../../models/product";

interface IProductState {
        product: Iproduct | {},
        products:Iproduct[]
}

const initialState: IProductState = {
        product: {},
        products:[]
}


export const addProduct  = createAsyncThunk("product/create", async (product: any) => {
            const res = await createProduct(product)
            return res;
})
export const listProducts = createAsyncThunk("product/lists", async () => {
    const res = await getProducts()
    return res;
})
export const listProduct = createAsyncThunk("product/list", async (id:any) => {
    const res = await getProduct(id)
    return res;
})
export const getProductsbyCategory = createAsyncThunk("product/listproducts", async (id:any) => {
    const res = await getProductsByCategory(id);
    return res
})
export const delProduct = createAsyncThunk("product/delete", async (id:any) => {
    const res = await removeProduct(id);
    return res
})
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(addProduct.fulfilled, (state,{payload}) => {
            state.products.push(payload as any)
        }),
        build.addCase(listProducts.fulfilled, (state,{payload}) => {
            state.products = payload as any
        }),
        build.addCase(listProduct.fulfilled, (state,{payload}) => {
            state.product = payload
        }),
        build.addCase(getProductsbyCategory.fulfilled, (state, {payload}) => {
            state.products = payload as any
        }),
        build.addCase(delProduct.fulfilled, (state, {payload}) => {
           // state.products = state.products.filter((item) => item._id !== payload.id)
        })
    }
})
export default productSlice.reducer