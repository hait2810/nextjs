import instance from "./config";


export const getCarts = () => {
        const url = `carts`;
        return instance.get(url)
}
export const AddCart = (cart:any) =>{
        const url = `carts`;
        return instance.post(url, cart)
}

export const UpdateCart = ( cart:any) =>{
        const url = `carts/${cart._id}`;
        return instance.put(url,cart)
}
export const DeleteCart = (id : any) =>{
        const url = `carts/${id}`;
        return instance.delete(url)
}

export const getCart = (id : any) =>{
        const url = `carts/${id}`;
        return instance.get(url)
}