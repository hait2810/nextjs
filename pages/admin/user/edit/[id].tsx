import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getUser } from '../../../../api/user'
import { Edituser, listUser } from '../../../../src/features/user/user.silce'
type Props = {}

const index = (props: Props) => {
    const router = useRouter()
    const id = router.query.id
    const dispatch = useDispatch<any>();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
     
    useEffect(() => {
        (async () => {
            const user = await dispatch(listUser(id))
            reset(user.payload?.data)         
        })()

    }, [dispatch,reset,id])
    const onEdit = (data:any) => {
        dispatch(Edituser(data))
        alert("Thành công")

    }
    return (
        <div><div id="main-content" className="h-full w-full relative overflow-y-auto lg:ml-64">
            <main>
                <div className="pt-6 px-4">
                    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                        <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                            <div className="text-4xl font-bold">
                                <h2>Edit User</h2>
                            </div>
                            <div className="mt-4">
                                <div className="max-w-lg mx-auto">
                                    <form onSubmit={handleSubmit(onEdit)}>
                                        <div className="text-lg">
                                            <label className="font-medium text-gray-900">Hãy nhập đầy đủ các trường sau:</label>
                                        </div>
                                        <br />
                                        <div className="mb-6">
                                        <label className="font-medium text-gray-900">Bạn đang sửa user :</label>
                                        <br />
                                        <input {...register("email")} type="email" disabled  />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="password"
                                                className="text-sm font-medium text-gray-900 block mb-2">Role</label>
                                            <select {...register('role', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option>Choose a country</option>
                                                <option value="1">Admin</option>
                                                <option value="0">Member</option>
                                            </select>
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

        </div></div>
    )
}

export default index