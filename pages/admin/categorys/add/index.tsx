import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AddCategory } from '../../../../api/categorys'
import AdminLayout from '../../../../components/layout/admin'
import { Icategory } from '../../../../models/categorys'
type Props = {}

const AddCategorys = (props: Props) => {
    const categorys = useSelector((state: any) => state.category.categorys)
    const dispatch = useDispatch<any>();
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onAdd:SubmitHandler<any> = async (product: Icategory) => {
        try {
            await dispatch(AddCategory(product))
            alert("Thành công")
        } catch (error) {
            console.log(error);
            
        }
    }
        
  return (
    <div>
         <div id="main-content" className="h-full w-full relative overflow-y-auto lg:ml-64">
                <main>
                    <div className="pt-6 px-4">
                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                                <div className="text-4xl font-bold">
                                    <h2>Add Product</h2>
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
                                                    className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                                <input type="text" {...register('name', {required:true})}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Name Product" />
                                                    {errors.name && <span>Không được để trống!</span>}
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
AddCategorys.Layout = AdminLayout
export default AddCategorys