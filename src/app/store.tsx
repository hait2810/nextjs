import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart.slice";
import categoryReducer from "../features/categorys/category.slice";
import productReducer from "../features/products/product.slice";
import userReducer  from "../features/user/user.silce";

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
        user: userReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;