
import { Icategory } from "../models/categorys";
import instance from "./config";


export const getCategorys = () => {
        const url = `categorys`;
        return instance.get(url)
}