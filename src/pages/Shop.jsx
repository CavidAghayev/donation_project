import React from "react";
import { servicesApi } from "../Service/apiService";
import Product from "../Companents/Product/Product";
import { useRef , useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Shop() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const arrowLeft = useRef();
  const arrowDown = useRef();
  const dropdown = useRef();
  const none = useRef();
const arrowleftItem = () => {
  arrowLeft.current.classList.toggle("rotate")
  none.current.classList.toggle("none")
}
const arrowdownItem = () => {
  arrowDown.current.classList.toggle("rotate")
  dropdown.current.classList.toggle("dropdown")
}
  const { data: products } = servicesApi.useGetProductsQuery();
  return (
    <section>
      <div className="shop-background-image">
        <div className="shop-background-image-overlay">
          <h1>
MAĞAZA
          </h1>
        </div>
        <div className="shop-animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
        <div className="shop-market">
        <div className="shop-search">
        <div className="products-category">
          <ul>
          <li>HAMISI</li>
          <li>ŞƏRFLƏR</li>
          <li>AYAQQABILAR</li>
          <li>ŞORTLAR</li>
          <li>GÖDƏKCƏLƏR</li>
          </ul>
        </div>
          <form action="">
          <input type="name" name="name" id="" value="" placeholder="Search"/>
          <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
        <div onClick={arrowleftItem} className="filter-arrow">
<span>Filter</span>  <i ref={arrowLeft} class="fa-solid fa-chevron-left"></i>
        </div>
          <div className="shop-market-items">
          <div ref={none} className="market-filter">
    <div onClick={arrowdownItem} className="filter-box">
    <span>Kateqoriya</span>
  <i ref={arrowDown} class="fa-solid fa-chevron-down"></i>
    </div>
    <div ref={dropdown} className="filters">
      <ul>
        <li>Şərflər</li>
        <li>Ayaqqabılar</li>
        <li>Şortlar</li>
        <li>Gödəkçələr</li>
      </ul>
    </div>
    <div onClick={arrowdownItem} className="filter-box">
    <span>Ölçü</span>
  <i ref={arrowDown} class="fa-solid fa-chevron-down"></i>
    </div>
    <div ref={dropdown} className="filters">
      <ul>
        <li>s</li>
        <li>m</li>
        <li>l</li>
        <li>xl</li>
      </ul>
    </div>
    <div onClick={arrowdownItem} className="filter-box">
    <span>Gender</span>
  <i ref={arrowDown} class="fa-solid fa-chevron-down"></i>
    </div>
    <div ref={dropdown} className="filters">
      <ul>
      <li><a href="#">Kişi</a></li>
        <li><a href="#">Qadın</a></li>
      </ul>
    </div>
    <div onClick={arrowdownItem} className="filter-box">
    <span>Qiymət</span>
  <i ref={arrowDown} class="fa-solid fa-chevron-down"></i>
    </div>
    <div ref={dropdown} className="filters">
      <input type="text" placeholder="$ 0"/>
      <input type="text"   placeholder="$ 200"/>
    </div>
</div>
<Swiper
pagination={pagination}
modules={[Pagination]}
className="mySwiper"
>
<SwiperSlide>
<div className="products">    

{
products && products.map((product) => ( 
<Product key={product.id} product={product} count={product.count}
  />
))}
</div>
</SwiperSlide>
<SwiperSlide>2</SwiperSlide>
<SwiperSlide>3</SwiperSlide>
<SwiperSlide>4</SwiperSlide>
</Swiper>
          </div>
    </div>
    </section>
  );
}
export default Shop;
