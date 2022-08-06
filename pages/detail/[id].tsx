import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../src/features/products/product.slice'
import {useForm, SubmitHandler} from 'react-hook-form'
import NumberFormat from 'react-number-format';
import { addCartv } from '../../src/features/cart/cart.slice'

type Props = {}

const DetailProduct = (props: Props) => {
    const router = useRouter()
    const id = router.query.id
    const dispatch = useDispatch<any>()
    const {register, handleSubmit} = useForm()
    const [quantity, setQuantity] = useState(1)
    const [carts, setCarts] = useState<any[]>([])
    const products = useSelector((state: any) => state.product.product)    

    const Decrement:SubmitHandler<any> = () => {
        if(quantity > 1) {
          setQuantity(quantity-1)
        }else {
          alert("Sản phẩm phải > 1");
        }
    }
    const Increment = () => {
      setQuantity(quantity+1)
    }
    useEffect(() => {
        dispatch(listProduct(id))
        getCart()
    },[id])
    const getCart = () => { 
      if(localStorage.getItem("cart"))  {
        setCarts(JSON.parse(localStorage.getItem("cart") as any))
      }
    }
    const onOrder = () => {
     

        const product = {
          ...products.data, quantity
        }
        // bỏ trường category, createdAt,updatedAt,__v
        const {category,createdAt, updatedAt, __v, ...rest} = product
        const existProduct = carts.find(item => item._id === rest._id)
       rest.price = rest.price - (rest.price * rest.discount/100)
        if(!existProduct) {
          carts.push(rest)
        }else {
          existProduct.quantity += rest.quantity
        }
        localStorage.setItem("cart",JSON.stringify(carts))
        alert("Thêm vào giỏ hàng thành công")
        
        
        
        
    }
  return (
    <>
  <div className="wrapper__heading">
  </div>
  <div className="detail__product">
    <div className="container">
      <div className="content dp-grid">
        <div className="logo">
          <div>
            <img
              className="main__logo"
              src={products.data?.img}
              alt=""
            />
          </div>
          <div className="secondary__logo dp-flex align-items">
            <img
              className="btn__logo active"
              src="./assets/img/icon-instagram_5d6bbc1211e64d2688b491dbe0b5a7a6.webp"
              alt=""
            />
            <img
              className="btn__logo"
              src="./assets/img/icon-instagram_5d6bbc1211e64d2688b491dbe0b5a7a6.webp"
              alt=""
            />
            <img
              className="btn__logo"
              src="./assets/img/icon-instagram_5d6bbc1211e64d2688b491dbe0b5a7a6.webp"
              alt=""
            />
            <img
              className="btn__logo"
              src="./assets/img/icon-instagram_5d6bbc1211e64d2688b491dbe0b5a7a6.webp"
              alt=""
            />
            <img
              className="btn__logo"
              src="./assets/img/icon-instagram_5d6bbc1211e64d2688b491dbe0b5a7a6.webp"
              alt=""
            />
          </div>
        </div>
        <div className="infomation">
          <div className="name__code general_class">
            <h1 className="name">{products.data?.name}</h1>
            <span className="code">SKU: KIST81DL</span>
          </div>
          <div className="price general_class">
            {products.data?.discount>0 ? <span className="discount">-{products.data?.discount}%</span> : ""}
            <span className="new_price"><NumberFormat value={products.data?.price - (products.data?.price*products.data?.discount/100)} displayType={'text'} thousandSeparator={true} prefix={''} />₫</span>
            {products.data?.discount > 0 ? <del className="old_price"><NumberFormat value={products.data?.price} displayType={'text'} thousandSeparator={true} prefix={''} />₫</del> : ""}
            
          </div>
          <form onSubmit={handleSubmit(onOrder)}>
         
            
            <div className="quantity dp-flex general_class">
              <input
                onClick={handleSubmit(Decrement)}
                className="change_quantity minus"
                type="submit"
                value="-"
                name=""
                id=""
              />
              <input
                className="show_quantity"
                {...register('quantity')}
                type="text"
                name=""
                value={quantity}
                id=""
              />
              <input
               onClick={handleSubmit(Increment)}
                className="change_quantity add"
                type="submit"
                name=""
                value="+"
                id=""
              />
            </div>
            <div className="order">
              <button className="btn btn-order">Thêm vào giỏ hàng</button>
            </div>
          </form>
          <div className="description">
            <h1 className="title">Mô tả:</h1>
            <p>{products.data?.desc}</p>
          </div>
          <img
            src="https://file.hstatic.net/1000340796/file/aace4a18db751a2b4364_957e6602cfab4ba8a5e88c9969a4e9e4_grande.jpg"
            alt=""
            className="size__chart"
          />
        </div>
      </div>
    </div>
  </div>
</>

  )
}
export default DetailProduct