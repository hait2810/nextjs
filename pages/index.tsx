import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import Script from 'next/script'

type ProductProps = {
  products: any[]
}


const Home = ({ products }: ProductProps) => {
  if (!products) return null


  return (





    <div className="">
      {/* <div className="banner">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 2</div>
            <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658579538/slider_2_dqeoeb.webp" style={{ width: '100%' }} />
            
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 2</div>
            <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658579538/slider_3_mdhw9o.webp" style={{ width: '100%' }} />
            
          </div>
          <a className="prev" onclick="plusSlides(-1)">❮</a>
          <a className="next" onclick="plusSlides(1)">❯</a>
        </div>
        <br />
      </div> */}
      <div className="category max-w-6xl mx-auto reveal">
        <h2 className="title">Danh Mục</h2>
        <div className="flex">
          <div className="w-96 px-2 mx-auto text-white drop-shadow-xl">
            <div id="category_ao" className="
      bg-black
      rounded-xl
      relative
      overflow-hidden
      border border-primary border-opacity-20
      shadow-pricing
      
      
      ">
              <div className="bg
      rounded-xl
      overflow-hidden
      border border-primary border-opacity-20
      shadow-pricing
      lg:py-10 lg:px-6
  ">
                <span className="text-primary text-4xl font-semibold block mb-4 text-center">
                  ÁO
                </span>
                <a href="javascript:void(0)" className="
          w-full
          block
          text-base
          font-semibold
          text-primary
          bg-transparent
          border border-[#fffff]
          rounded-md
          text-center
          p-4
          hover:text-green-500
          transition
          ">
                  Xem Chi Tiết
                </a>
              </div>
            </div>
          </div>
          <div className="w-96 px-2 mx-auto text-white drop-shadow-xl">
            <div id="category_quan" className="
      bg-white
      rounded-xl
      relative
      overflow-hidden
      border border-primary border-opacity-20
      shadow-pricing            
      ">
              <div className="bg
      rounded-xl
      overflow-hidden
      border border-primary border-opacity-20
      shadow-pricing
      lg:py-10 lg:px-6
    ">
                <span className="text-primary text-4xl font-semibold block mb-4 text-center">
                  QUẦN
                </span>
                <a href="javascript:void(0)" className="
          w-full
          block
          text-base
          font-semibold
          text-primary
          bg-transparent
          border border-[#fffff]
          rounded-md
          text-center
          p-4
          hover:text-green-500
          transition
          ">
                  Xem Chi Tiết
                </a>
              </div>
            </div>
          </div>
          <div className="w-96 px-2 mx-auto text-white drop-shadow-xl">
            <div id="category_phuKien" className="
      bg-white
      rounded-xl
      relative
      overflow-hidden
      border border-primary border-opacity-20
      shadow-pricing
      ">
              {/* <h2 class="mb-5">
          <img class="rounded-md shadow-lg shadow-inner"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0210.jpg?v=1657011821000" alt="">
        </h2> */}
              <div className="bg
      rounded-xl
      overflow-hidden
      border border-primary border-opacity-20
      shadow-pricing
      lg:py-10 lg:px-6
    ">
                <span className="text-primary text-4xl font-semibold block mb-4 text-center">
                  PHỤ KIỆN
                </span>
                <a href="javascript:void(0)" className="
          w-full
          block
          text-base
          font-semibold
          text-primary
          bg-transparent
          border border-[#fffff]
          rounded-md
          text-center
          p-4
          hover:text-green-500
          transition
          ">
                  Xem Chi Tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="new__products">
        <div className="container">
          <h2 className="title">sản phẩm mới nhất</h2>
          <div className="products dp-grid">
            {products && products.map((item) => {
              return <div key={item.id} className="product" data-aos="fade-down">
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
                  <span className="new__price">{item.price - (item.price * item.discount / 100)}₫</span>
                  {item.discount > 0 ? <del className="old__price">{item.price}₫</del> : ""}
                </div>
              </div>
            })}

          </div>
        </div>
      </section>
    </div>



  )
}


export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
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
