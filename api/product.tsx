import { Iproduct } from "../models/product";
import instance from "./config";


export const createProduct = (product: Iproduct) => {
        const url = `products`;
        return instance.post(url,product)
}
export const getProducts = () => {
        const url = `products`;
        return instance.get(url)
}
export const getProduct = (id:any) => {
        const url = `products/${id}`;
        return instance.get(url)
}
export const editProduct = (product:Iproduct) => {
        const url = `products/${product._id}`;
        return instance.put(url,product)
}