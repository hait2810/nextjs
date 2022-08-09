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

  const OnRemove = (id: any) => {
    const confirm = window.confirm("Ban co chac chan muon xoa khong")
    if (confirm) {
      dispatch(delProduct(id))
    }
  }
  return (
    <div id="main-content" className="h-full w-full relative overflow-y-auto">     
      <main>
        <div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="text-4xl font-bold">
                <h2>Product</h2>
              </div>
              <div className="mt-4">
                <div className="text-sky-500 text-lg font-semibold underline hover:text-sky-600">
                <Link href={`products/add`}>Add</Link>
                </div>
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Img</th>
                      <th scope="col">Price</th>
                      <th scope="col">Details</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {products.data?.map((item: any, index: number) => {

                      return <tr className='border-b'>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td><img src={item.img} alt="" width="150px" /></td>
                        <td>{item.price}</td>
                        <td>{item.desc}</td>
                        <td className='space-x-1 space-y-1'>
                          <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800">
                            <Link href={`products/edit/${item._id}`}>Edit</Link>
                          </button>
                          <button
                            type="submit" onClick={() => OnRemove(item._id)}
                            className="px-2 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-700">
                            Delete
                          </button>
                        </td>
                        
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </main >
      
    </div >

  )
}
ProductList.Layout = AdminLayout
export default ProductList