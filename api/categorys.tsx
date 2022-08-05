
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

export const UpdateCategory = ( datacate:Icategory) =>{
        const url = `categorys/${datacate._id}`;
        return instance.put(url,datacate)
}
export const DeleteCategory = (id : any) =>{
        const url = `categorys/${id}`;
        return instance.delete(url)
}

export const getCategoryId = (id : any) =>{
        const url = `categorys/${id}`;
        return instance.get(url)
}