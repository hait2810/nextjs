import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsbyCategory } from '../../src/features/products/product.slice'

type Props = {}

const DetailCategory = (props: Props) => {
    const router = useRouter()
    const id = router.query.id
    const dispatch = useDispatch<any>();
    const products = useSelector((state:any) => state.product.products)
    console.log(products);
    console.log(id);
    
    useEffect(() => {
            dispatch(getProductsbyCategory(id))
    }, [id])
  return (
    <div>
 <section className="new__products">
      <div className="container">
        <h2 className="title">Danh mục sản phẩm</h2>
        <div className="products dp-grid">
         {products.data?.map((item:any) => {
          return  <div key={item.id} className="product" data-aos="fade-down">
          <Link href={`detail/${item._id}`}
            ><img
              src={item.img}
              alt=""
              className="product__img"
          /></Link>
          {item.discount > 0 ? <span className="promotion"> -{item.discount}% </span> : ''}
          <h3 className="product__name">
            <Link className="remove__underline" href={`detail/${item._id}`}
              >{item.name}
            </Link>
          </h3>
          <div className="product__price">
            <span className="new__price">{item.price - (item.price * item.discount/100)}₫</span>
           {item.discount > 0 ?  <del className="old__price">{item.price}₫</del> : ""}
          </div>
        </div>
         })}
          
        </div>
      </div> 
    </section>
    </div>
  )
}
export default DetailCategory