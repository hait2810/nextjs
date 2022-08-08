import { Iuser } from "../models/user";
import instance from "./config";


export const getUsers = () => {
    const url = `users`;
    return instance.get(url)
}
export const signup = (uesr: Iuser) => {
    const url = `signup`;
    return instance.post(url, uesr)
}
export const signin = (uesr: Iuser) => {
    const url = `signin`;
    return instance.post(url, uesr)
}
export const getUser = (id:any) => {
    const url = `user/${id}`;
    return instance.get(url)
}
export const DeleteUser = (id : any) =>{
    const url = `users/${id}`;
    return instance.delete(url)
}
export const UpdateUser = (user : Iuser) =>{
    const url = `user/${user._id}`;
    return instance.put(url,user)
}

