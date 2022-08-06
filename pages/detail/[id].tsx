import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../src/features/products/product.slice'

type Props = {}

const DetailProduct = (props: Props) => {
  const router = useRouter()
  const id = router.query.id
  const dispatch = useDispatch<any>()
  const products = useSelector((state: any) => state.product.product)


  useEffect(() => {
    dispatch(listProduct(id))

  }, [id])
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
                {products.data?.discount > 0 ? <span className="discount">-{products.data?.discount}%</span> : ""}
                <span className="new_price">{products.data?.price - (products.data?.price * products.data?.discount / 100)}₫</span>
                {products.data?.discount > 0 ? <del className="old_price">{products.data?.price}₫</del> : ""}

              </div>
              <form>


                <div className="quantity dp-flex general_class">
                  <input
                    className="change_quantity minus"
                    type="submit"
                    value="-"
                    name=""
                    id=""
                  />
                  <input
                    className="show_quantity"
                    type="text"
                    name=""
                    value={1}
                    id=""
                  />
                  <input
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