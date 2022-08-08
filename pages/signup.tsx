import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { adduser } from '../src/features/user/user.silce';


type Props = {}

const signup = (props: Props) => {
    const dispatch = useDispatch<any>();
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const onAdd: SubmitHandler<any> = async (DATA: any) => {
        // try {
            await dispatch(adduser(DATA))
            console.log(DATA);
            alert("Thành công")
        // } catch (error) {
        //     console.log(error);

        // }
    }
    return (
        <div><section className="account__page">
            <div className="container">
                <div className="content dp-grid">
                    <div className="heading">
                        <h1 className="title">Đăng ký</h1>
                    </div>
                    <div className="form__account">
                        <form className="dp-flex" onSubmit={handleSubmit(onAdd)} >
                            <input type="text"  placeholder="Email"  {...register('email')}/>
                            <input type="text" placeholder="Ten ten tai khoan" {...register('fullname')}/>
                            <input type="password"  placeholder="Password" {...register('password')}/>
                            <div className="wrapper_button dp-flex">
                                <button type="submit">Đăng ký</button>
                                <div className="forgot_password">
                                    <span>Bạn đã có tài khoản?</span>
                                    
                                    <Link className="remove__underline" href="/signin" >
                                        Đăng nhập
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default signup