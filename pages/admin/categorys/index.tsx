import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../components/layout/admin'
import { DeleteCategorys, getCategory } from '../../../src/features/categorys/category.slice'


type Props = {}

const ListCategory = (props: Props) => {
  const categorys = useSelector((state: any) => state.category.categorys)


  const dispatch = useDispatch<any>()

  useEffect(() => {
    (async () => {
      await dispatch(getCategory())
    })()
  }, [dispatch])

  const OnRemove = async (id: any) => {
    const confirm = window.confirm("bạn có muốn xóa ko")
    if (confirm) {
      try {
        await dispatch(DeleteCategorys(id))
        alert("Đã xóa thành công")
      } catch (error) {

      }
    }
  }
  return (


    <div className="overflow-x-auto relative">


      <div id="main-content" className="h-full w-full relative overflow-y-auto">
        <main>
          <div className="px-4">
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
              <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                <div className="text-4xl font-bold">
                  <h2>Category Product</h2>
                </div>
                <div className="mt-4">
                  <div className="text-sky-500 text-lg font-semibold underline hover:text-sky-600">
                    <Link href={`categorys/add`}>Add</Link>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className='py-3 px-6' scope="col">ID</th>
                        <th className='py-3 px-6' scope="col">Name</th>
                        <th className='py-3 px-6' scope="col" />
                      </tr>
                    </thead>
                    <tbody>

                      {categorys.data?.map((item: any, index: number) => {
                        return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index + 1}
                          </th>
                          <td className="py-4 px-6">
                            {item.name}
                          </td>


                          <td className="py-4 px-6 space-x-1 space-y-1">
                            <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 py-4 px-6">
                              <Link href={`categorys/edit/${item._id}`}>Sửa</Link>
                            </button>
                            <button className="px-2 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-700 py-4 px-6"
                              type="submit" onClick={() => OnRemove(item._id)} >
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
        </main>
      </div>



    </div>




  )
}
ListCategory.Layout = AdminLayout
export default ListCategory