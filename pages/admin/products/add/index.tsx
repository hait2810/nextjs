import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../../components/layout/admin'
import { getCategory } from '../../../../src/features/categorys/category.slice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Iproduct } from '../../../../models/product'
import { uploadImage } from '../../../../src/utils/upload'
import { addProduct } from '../../../../src/features/products/product.slice'
type Props = {}

const AddProduct = (props: Props) => {
    const categorys = useSelector((state: any) => state.category.categorys)
    const dispatch = useDispatch<any>();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/hait-10/image/upload";
    const CLOUDINARY_PRESET = "gsixsix";
    const onAdd: SubmitHandler<any> = async (product: Iproduct) => {
        try {
            const { data } = await uploadImage(product.img[0], CLOUDINARY_API, CLOUDINARY_PRESET)
            product.img = data.url
            await dispatch(addProduct(product))
            alert("Thành công")
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        dispatch(getCategory())
        console.log(categorys);

    }, [dispatch])

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
                                                <input type="text" {...register('name', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Name Product" />
                                                {errors.name && <span>Không được để trống!</span>}
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="password"
                                                    className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                                <input type="text" {...register('price', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Price" />
                                                {errors.price && <span>Không được để trống!</span>}
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="password"
                                                    className="text-sm font-medium text-gray-900 block mb-2">Desc</label>
                                                <input type="text" {...register('desc', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Desc" />
                                                {errors.desc && <span>Không được để trống!</span>}
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="password"
                                                    className="text-sm font-medium text-gray-900 block mb-2">Discount</label>
                                                <input type="text" {...register('discount', { required: true })}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Discount" />
                                                {errors.desc && <span>Không được để trống!</span>}
                                            </div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Img</label>
                                            <input {...register('img', { required: true })} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
                                            {errors.img && <span>Không được để trống!</span>}
                                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Chọn danh mục</label>
                                            <select {...register('category', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a country</option>
                                                {categorys && categorys.data?.map((item: any) => {
                                                    return <option key={item._id} value={item._id}>{item.name}</option>
                                                })}
                                            </select>
                                            {errors.category && <span>Không được để trống!</span>}



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
AddProduct.Layout = AdminLayout
export default AddProduct