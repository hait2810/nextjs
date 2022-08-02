import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header>
                <div className="wrapper__header-top ">
                    <div className="container ">
                        <div className="header-top flex mx-auto ">
                            <div className="wrapper__logo mr-auto ml-4">
                                {/* <a href="" class="logo remove__underline">NVH SYSTEM</a> */}
                                <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658578748/1619593227974-ClownZ_-_logo_1_iz726o.png" width="50px" />
                            </div>
                            <nav className="main-nav mx-auto">
                                <ul className="dp-flex align-items space-x-8">
                                    <li><a className="remove__underline" href="">Trang Chủ</a></li>
                                    {/* <li><a class="remove__underline" href="">Shop</a></li> */}
                                    <div className="navbar">
                                        <div className="dropdown">
                                            <button className="dropbtn">
                                                <li><a className="remove__underline" href="">Sản phẩm</a></li>
                                            </button>
                                            <div className="dropdown-content">
                                                <a href="#">Áo</a>
                                                <a href="#">Quần</a>
                                                <a href="#">Phụ kiện</a>
                                            </div>
                                        </div>
                                    </div>
                                    <li><a className="remove__underline" href="">Kích cỡ</a></li>
                                    <li><a className="remove__underline" href="">Giới thiệu</a></li>
                                    <li><a className="remove__underline" href="">Liên hệ</a></li>
                                </ul>
                            </nav>
                            <div className="header-right dp-flex mr-4 mx-auto ml-24">
                                <a href="./dashboard_admin.html" className="user"><img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658798226/person-circle-outline_qryj38.svg" /></a>
                                <a href="#" className="search"><img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658798226/search-circle-outline_lcluu7.svg" /></a>
                                <a href="" className="cart">
                                    <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658798226/bag-outline_dbqere.svg" />
                                    <span className="count">0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="modal_search">
                <div className="container">
                    <div className="modal_search_content">
                        <div className="title dp-flex space-beetwen">
                            <h5>TÌM KIẾM</h5>
                            <a href="#" className="close"><img className="logo_close" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1658798226/close-outline_zjnytp.svg"  /></a>
                        </div>
                        <form  className="dp-flex align-items">
                            <input type="text"  placeholder="Tìm kiếm sản phẩm..." />
                            <button type="submit">
                                <img className="icon_search" src="https://cdn-icons-png.flaticon.com/512/122/122932.png"  />
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header