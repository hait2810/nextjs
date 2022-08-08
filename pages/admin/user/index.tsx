import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import { listUsers } from './../../../src/features/user/user.silce'
import AdminLayout from '../../../components/layout/admin'
type Props = {}

const ListUser = (props: Props) => {
  const users = useSelector((state: any) => state.user.users)
  const dispatch = useDispatch<any>()
  useEffect(() => {

    dispatch(listUsers())
    console.log(users);

  }, [dispatch])
  const OnRemove = async (id: any) => {
    const confirm = window.confirm("bạn có muốn xóa ko")
    if (confirm) {
      try {
        await dispatch((id))
        alert("Đã xóa thành công")
      } catch (error) {

      }
    }
  }
  // const onUpdate:SubmitHandler<any> = (data:any) => {
  //     console.log(data);
  // }
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Stt
            </th>
            <th scope="col" className="py-3 px-6">
              Full Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users.data?.map((item: any, index: number) => {
            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </th>
              <td className="py-4 px-6">
                {item.fullname}
              </td>
              <td className="py-4 px-6">
                {item.email}
              </td>
              <td className="py-4 px-6">
                {item.role}
              </td>
              {/* <td className="py-4 px-6">
                <button type="submit" onClick={() => OnRemove(item._id)} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Xóa</button>
              </td> */}
            </tr>

          })}

        </tbody>
      </table>
    </div>

  )
}
ListUser.Layout = AdminLayout
export default ListUser