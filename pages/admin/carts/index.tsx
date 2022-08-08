import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../components/layout/admin'
import { getListCarts, removeCart, updateCartv } from '../../../src/features/cart/cart.slice'


type Props = {}

const ListCart = (props: Props) => {
    const carts = useSelector((state: any)=>state.cart.carts)  

    
    const dispatch = useDispatch<any>()
    
    useEffect(() =>{
        ( async () => { 
        await dispatch(getListCarts())
        }) ()
    },[dispatch])

    const OnRemove = async (id : any) =>{
       const confirm = window.confirm("bạn có muốn xóa ko")
       if (confirm) {
        try {
            await dispatch(removeCart(id))
            alert("Đã xóa thành công")
        } catch (error) {
            
        }
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
          Total Price
        </th>
        <th scope="col" className="py-3 px-6">
          Status
        </th>
        <th scope="col" className="py-3 px-6">
          Xóa
        </th>
        <th scope="col" className="py-3 px-6">
          Sửa
        </th>
      </tr>
    </thead>
    <tbody>

    {carts.data?.map((item : any , index : number) =>{


        return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {index + 1}
        </th>
        <td className="py-4 px-6">
        {item.totalprice}
        </td>
        <td className="py-4 px-6">
        {item.status == 0 ? "Đang xử lý": "Đã gửi" }
        </td>
        <td className="py-4 px-6">
        <button type="submit" onClick={() => OnRemove(item._id)} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Xóa</button>
        </td>
        <td><Link href="">Sửa</Link></td>
      </tr>
         
     })}
      
    </tbody>
  </table>
</div>




  )
}
ListCart.Layout = AdminLayout
export default ListCart