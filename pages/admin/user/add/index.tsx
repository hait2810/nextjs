import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../../components/layout/admin'
// import { getCategory } from '../../../../src/features/categorys/category.slice'
// import 
import { SubmitHandler, useForm } from 'react-hook-form'
// import { Iproduct } from '../../../../models/product'
// import { uploadImage } from '../../../../src/utils/upload'
// import { addProduct } from '../../../../src/features/products/product.slice'
import { Iuser } from '../../../../models/user'
import { adduser } from '../../../../src/features/user/user.silce'
import { getCategory } from '../../../../src/features/categorys/category.slice'
import { signup } from '../../../../api/user'
// import 
type Props = {}

const AddUser = (props: Props) => {
    const dispatch = useDispatch<any>();
    const {register, handleSubmit, formState: {errors}} = useForm<any>()
    const onAdd:SubmitHandler<any> = async (DATA:any) => {
       try {
        await dispatch(signup(DATA))
        console.log(DATA);
        alert("Thành công")        
       } catch (error) {
        console.log(error);
        
       }
    }
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    return (
        <div>
            <div id="main-content" className="h-full w-full relative overflow-y-auto lg:ml-64">
                <main>
                    <div className="pt-6 px-4">
                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                                <div className="text-4xl font-bold">
                                    <h2>Add User</h2>
                                </div>
                                <div className="mt-4">

                                    <div className="max-w-lg mx-auto">
                                        <form onSubmit={handleSubmit(onAdd)}>
                                            <div className="text-lg">
                                                <label className="font-medium text-gray-900">Hãy nhập đầy đủ các trường sau:</label>
                                            </div>
                                            <br />
                                            <div className="mb-6">
                                                <label htmlFor="email"
                                                    className="text-sm font-medium text-gray-900 block mb-2">Full name</label>
                                                <input type="text" {...register('fullname', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Full Name" />
                                                {errors.name && <span>Không được để trống!</span>}
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="password"
                                                    className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                                <input type="text" {...register('email', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Email" />
                                                {errors.price && <span>Không được để trống!</span>}
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="password"
                                                    className="text-sm font-medium text-gray-900 block mb-2">Password</label>
                                                <input type="text" {...register('password', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Password" />
                                                {errors.desc && <span>Không được để trống!</span>}
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="password"
                                                    className="text-sm font-medium text-gray-900 block mb-2">Role</label>
                                                <input type="text" {...register('role', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Role" />
                                                {errors.desc && <span>Không được để trống!</span>}
                                            </div>
                                            <button type="submit"
                                                className="text-white bg-blue-700 hover:bg-blue-800
                                                focus:ring-4 focus:ring-blue-300 font-medium
                                                rounded-lg text-sm px-5 py-2.5 text-center"
                                            >Submit</button>
                                        </form>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}
AddUser.Layout = AdminLayout
export default AddUser