import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { adduser, lognin } from '../src/features/user/user.silce';

type Props = {}

const signin = (props: Props) => {
    const dispatch = useDispatch<any>();
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const router = useRouter()
    const onAdd: SubmitHandler<any> = async (DATA: any) => {
          const data =  await dispatch(lognin(DATA))
          if (data.payload?.data) {
            localStorage.setItem("user",JSON.stringify(data.payload.data))
            alert("Thành công")
          }else{
            alert("đăng nhập không thành công")
          }
            // console.log(data);
    }
    useEffect(()=>{
        (async ()=> {
            const data = await JSON.parse(localStorage.getItem("user") as any )
            if (data) {
                router.push("/");
              }else{
              
              }
        }) ()
    })
    return (
        <div><section className="account__page">
            <div className="container">
                <div className="content dp-grid">
                    <div className="heading">
                        <h1 className="title">Đăng Nhập</h1>
                    </div>
                    <div className="form__account">
                        <form className="dp-flex" onSubmit={handleSubmit(onAdd)} >
                            <input type="text"  placeholder="Email"  {...register('email')}/>
                            <input type="password"  placeholder="Password" {...register('password')}/>
                            <div className="wrapper_button dp-flex">
                                <button type="submit">Đăng nhập</button>
                                <div className="forgot_password">
                                    <span>Bạn chưa có tài khoản?</span>
                                    <Link className="remove__underline" href="/signup">
                                        Đăng ký
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

export default signin