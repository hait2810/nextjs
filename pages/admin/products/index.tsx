import React, { useEffect } from 'react'
import AdminLayout from '../../../components/layout/admin'
import { useDispatch, useSelector } from 'react-redux'
import { delProduct, listProducts } from '../../../src/features/products/product.slice'
import Link from 'next/link'


type Props = {}

const ProductList = (props: Props) => {
  const products = useSelector((state: any) => state.product.products)
  const dispatch = useDispatch<any>()
  useEffect(() => {

    dispatch(listProducts())
    console.log(products)
  }, [dispatch])
  
  const OnRemove = (id:any) => {
    const confirm = window.confirm("Ban co chac chan muon xoa khong")
    if(confirm){
      dispatch(delProduct(id))
    }
  }
  return (
    <div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
           #
          </th>
          <th scope="col" className="py-3 px-6">
            Name
          </th>
          <th scope="col" className="py-3 px-6">
            Img
          </th>

<th scope="col" className="py-3 px-6">
            Price
          </th>
          <th scope="col" className="py-3 px-6">
            Desc
          </th>
          <th scope="col" className="py-3 px-6">
            Sửa
          </th>
          <th scope="col" className="py-3 px-6">
            Xóa
          </th>
        </tr>
      </thead>
      <tbody>
      {products.data?.map((item : any , index : number) =>{
          return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {index + 1}
          </th>
          <td className="py-4 px-6">
          {item.name}
          </td>
          <td className="py-4 px-6">
          <img src={item.img} alt="" />
          </td>
          <td className="py-4 px-6">
          {item.price}
          </td>
          <td className="py-4 px-6">
          {item.desc}
          </td>
          <td className="py-4 px-6">
            <Link href={`products/edit/${item._id}`}>Edit</Link>
          </td>
          <td className="py-4 px-6">
          <button type="submit" onClick={() => OnRemove(item._id)} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Xóa</button>
          </td>
        </tr>
           
       })}
        
      </tbody>
    </table>
  </div>

  )
}
ProductList.Layout = AdminLayout
export default ProductList