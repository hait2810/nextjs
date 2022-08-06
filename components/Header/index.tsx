import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import {useSelector, useDispatch } from 'react-redux'
import { getCategory } from '../../src/features/categorys/category.slice'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
  const dispatch = useDispatch<any>()
  const categoryx = useSelector((state:any)=>state.category.categorys)
  
  const [carts, setCart] = useState(0);
  
  const getCart = () => {
      if(localStorage.getItem("cart")) {
    setCart(JSON.parse(localStorage.getItem('cart') as any).length)
      }
  }
  
  console.log(carts);
  
  useEffect(() => {
           dispatch(getCategory())
           getCart()
  },[])
    return (
     

        <div>
         <header>
  <div className="wrapper__header-top ">
    <div className="container ">
      <div className="header-top flex mx-auto ">
        <div className="wrapper__logo mr-auto ml-4">
         
          <img
            src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658578748/1619593227974-ClownZ_-_logo_1_iz726o.png"
            alt="" width="50px" />
        </div>
        <nav className="main-nav mx-auto">
          <ul className="dp-flex align-items space-x-8">

            <li><Link className="remove__underline" href="/">Trang Chủ</Link></li>
           

            <div className="navbar">
              <div className="dropdown">
                <button className="dropbtn">
                  <li><a className="remove__underline" href="#">Sản phẩm</a></li>
                </button>

                <div className="dropdown-content">
                
                
                  {categoryx.data?.map((item:any) => {
                    return   <Link href={`/category/${item._id}`}>{item.name}</Link>
                  })}
                </div>
              </div>
            </div>
            <li><a className="remove__underline" href="">Kích cỡ</a></li>
            <li><a className="remove__underline" href="">Giới thiệu</a></li>
            <li><a className="remove__underline" href="">Liên hệ</a></li>
          </ul>
        </nav>

        <div className="header-right dp-flex mr-4 mx-auto ml-24">
          <a href="./dashboard_admin.html" className="user"><img
              src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658798226/person-circle-outline_qryj38.svg"
              alt="" /></a>
          <a href="#" className="search"><img
              src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658798226/search-circle-outline_lcluu7.svg"
              alt="" /></a>
          <a href="/cart" className="cart">
                      <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658798226/bag-outline_dbqere.svg" alt="" />
            <span className="count">{carts}</span>
          </a>
        </div>

      </div>
    </div>
    <Script src="http://hai2810.com/main.js" />
  </div>
</header>
<div className="modal_search">
      <div className="container">
        <div className="modal_search_content">
          <div className="title dp-flex space-beetwen">
            <h5>TÌM KIẾM</h5>
            <a href="#" className="close"
              ><img
              className="logo_close"
                src="http://hai2810.com/img/close-outline.svg"
                alt=""
            /></a>
          </div>
          <form action="" className="dp-flex align-items">
            <input
              type="text"
              name=""
              id=""
              placeholder="Tìm kiếm sản phẩm..."
            />
            <button type="submit">
              <img
                className="icon_search"
                src="https://cdn-icons-png.flaticon.com/512/122/122932.png"
                alt=""
              />
            </button>
          </form>
        </div>
      </div>
    </div>

        </div>
              

    )
}

export default Header