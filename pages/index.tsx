import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import NumberFormat from 'react-number-format'

type ProductProps = {
  products: any[]
}


const Home = ({products}: ProductProps) => {
  if(!products) return null

  
  return (
    
       <section className="new__products">
      <div className="container">
        <h2 className="title">sản phẩm mới nhất</h2>
        <div className="products dp-grid">
         {products && products.map((item) => {
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
            <span className="new__price"><NumberFormat value={item.price - (item.price * item.discount/100)} displayType={'text'} thousandSeparator={true} prefix={''} />₫</span>
           {item.discount > 0 ?  <del className="old__price"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={''} />₫</del> : ""}
          </div>
        </div>
         })}
          
        </div>
      </div> 
    </section>
   
  )
}


export const getStaticProps: GetStaticProps<ProductProps> = async (context:GetStaticPropsContext) => {
      const response = await fetch(`http://localhost:8080/products`);
      const data = await response.json()
      return {
        props: {
          products: data,
        },
        revalidate: 60
      }

}

export default Home
