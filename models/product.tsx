export interface  Iproduct{
    _id: number | string,
    name: string,
    img: string,
    desc?: string,
    discount: number,
    price: number,
    category:string
}