import { Iproduct } from "../models/product";
import instance from "./config";


export const createProduct = (product: Iproduct) => {
        const url = `products`;
        return instance.post(url,product)
}