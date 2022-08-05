import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorys/category.slice";
import productReducer from "../features/products/product.slice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer
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