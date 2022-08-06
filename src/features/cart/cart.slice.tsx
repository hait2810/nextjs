import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddCart, DeleteCart, getCart, getCarts, UpdateCart } from "../../../api/cart";


interface ICartState {
    cart: {},
    carts: any[]
}

const initialState: ICartState = {
    cart: {},
    carts:[] as any
}

export const getListCarts  = createAsyncThunk("cart/lists", async () => {
    const res = await getCarts()
    return res;
})
export const getListCart  = createAsyncThunk("cart/list", async (id:any) => {
    const res = await getCart(id)
    return res;
})
export const addCartv  = createAsyncThunk("cart/add", async (cart:any) => {
    const res = await AddCart(cart)
    return res;
})
export const updateCartv  = createAsyncThunk("cart/update", async (cart:any) => {
    const res = await UpdateCart(cart)
    return res;
})

export const removeCart  = createAsyncThunk("cart/remove", async (id:any) => {
    const res = await DeleteCart(id)
    return res;
})



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListCarts.fulfilled,(state,{payload}) => {
            state.carts = payload as any
        }),
        builder.addCase(addCartv.fulfilled,(state,{payload}) => {
            state.carts.push(payload as any) 
        }),
        builder.addCase(removeCart.fulfilled,(state,{payload}) => {
           state.carts.filter((item) => item._id !== payload.id)  
        }),
        builder.addCase(updateCartv.fulfilled,(state,{payload}) => {
            //state.carts=state.carts=state.carts.map((item:any)=>(item._id === payload.id ? payload :item!)) as []
        }),
        builder.addCase(getListCart.fulfilled,(state,{payload}) => {
            state.carts = payload as any
        })
    }

})
export default cartSlice.reducer