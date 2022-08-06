import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addCartv } from '../src/features/cart/cart.slice'
type Props = {}

const Cart = (props: Props) => {
    const [carts,setCarts] = useState<any[]>([])
   const {register, handleSubmit} = useForm()
   const dispatch = useDispatch<any>()

    let sum = 0;
    for (let index = 0; index < carts.length; index++) {
      sum+= carts[index]['quantity'] * carts[index]['price']
      
    }
    console.log(sum);
    
    
    const getCart = () => {
     
        if(localStorage.getItem("cart")) {
            setCarts(JSON.parse(localStorage.getItem("cart") as any))
        }
    }
    useEffect(() => {
        getCart()
    }, [])
    const onRemove = (id:any) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?")
        if(confirm) {
            const cartf = carts.filter((item) => item._id !== id) 
        localStorage.setItem("cart", JSON.stringify(cartf))
        getCart()
            alert("Xoá thành công")
        }
        
    }
    const onDecrement = (id:any) => {
        const cartf = carts.find(item => item._id == id)         
        cartf.quantity--
        if(cartf.quantity < 1) {
            const confirm = window.confirm("Bạn có muốn xoá không?");
            if(confirm) {
                const cartf = carts.filter((item) => item._id !== id) 
                localStorage.setItem("cart", JSON.stringify(cartf))
               return getCart()
            }else {
                return getCart()
            }
           
        }
        localStorage.setItem("cart", JSON.stringify(carts))
        getCart()
    }
    const onIncrement = (id:any) => {
        const cartf = carts.find((item) => item._id === id) 
        cartf.quantity++
        localStorage.setItem("cart", JSON.stringify(carts))
        getCart()
    }
   
    const onAdd = (data:any) => {
    
      
          const product = {
            cart: carts  , infomation: data, totalprice: sum
          }
          dispatch(addCartv(product))
          localStorage.removeItem("cart");
          getCart()
          alert("Thành công")
          
    }
  return (
    <>
  
    <div className="container">
      <div className="main__title">
        <h2 className="title">Giỏ hàng của bạn</h2>
        <span className="count_cart">Có {carts.length} sản phẩm trong giỏ hàng</span>
      </div>
    </div>
    <div className="main_cart">
      <div className="container">
        <div className="cart">
          <table>
            <thead>
              <tr>
                <th>Img</th>
                <th>Thông tin sản phẩm</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
            {carts?.map((item:any) => {
            return <tr>
            <td>
              <img
                src={item.img}
                alt=""
              />
            </td>
            <td>
              <Link href={`detail/${item._id}`}>{item.name}</Link>
              <p className="price"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={''} />₫</p>
              
              <div className="quantity dp-flex">
                <input onClick={() => onDecrement(item._id)}
                  type="submit"
                  value="-"
                  className="up_and_down"
                
                />
                <input
                  type="text"
                  className="show_quantity"
                  value={item.quantity}
                  name=""
                  id=""
                />
                <input onClick={() => onIncrement(item._id)}
                  type="submit"
                  value="+"
                  className="up_and_down"
                  name=""
                  id=""
                />
              </div>
            </td>
            <td>
              <button type="submit" onClick={ () => onRemove(item._id)} className="btn_remove">
                <img
                  src="https://theme.hstatic.net/1000340796/1000856039/14/ic_close.png?v=4"
                  alt=""
                />
              </button>
              <div className="space" />
              <p className="total_price"><NumberFormat value={item.price * item.quantity} displayType={'text'} thousandSeparator={true} prefix={''} />₫</p>
            </td>
          </tr>
            })}
              
            </tbody>
          </table>
           <form onSubmit={handleSubmit(onAdd)}>
          <div className="consignee_infomation dp-flex align-items">
         
            <div className="infomation">
              
              <h1>Thông tin giao hàng</h1>
              <input type="text" {...register('fullname')} placeholder="Họ và tên" /  >
              <input type="text" {...register('phonenumber')} placeholder="Số điện thoại"/>
              <input type="text" {...register('email')} placeholder="Email" />
              <input type="text" {...register('address')} placeholder="Địa chỉ nhận hàng"  />
              <textarea
              {...register('note')}
                
                placeholder="Ghi chú"
               
                cols={30}
                rows={5}
                
              />
              
            </div>
            <div className="total">
              <p>Phí vận chuyển: 30,000₫</p>
              <h1>Tổng tiền: <NumberFormat value={sum+30000} displayType={'text'} thousandSeparator={true} prefix={''} />₫</h1>
              <button type="submit" className="btn_order">
                Thanh toán
              </button>
            </div>
           
          </div>
          </form>
        </div>
      </div>
    </div>
  </>
  
  )
}
export default Cart