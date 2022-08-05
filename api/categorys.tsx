
import { Icategory } from "../models/categorys";
import instance from "./config";


export const getCategorys = () => {
        const url = `categorys`;
        return instance.get(url)
}
export const AddCategory = (category : Icategory) =>{
        const url = `categorys`;
        return instance.post(url, category)
}

export const UpdateCategory = (category: Icategory, id : any) =>{
        const url = `categorys/${id}`;
        return instance.put(url,category)
}
export const DeleteCategory = (id : any) =>{
        const url = `categorys/${id}`;
        return instance.delete(url)
}

export const getCategoryId = (id : any) =>{
        const url = `categorys/${id}`;
        return instance.get(url)
}