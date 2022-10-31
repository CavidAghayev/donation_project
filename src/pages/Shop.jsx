import React from "react";
import { servicesApi } from "../Service/apiService";
import Product from "../Companents/Product/Product";
import { useRef , useState } from "react";
    function Shop() {
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
  const changeHtml = useRef();


  const [ products,setProducts]=useState(null)
  const [ data,setData]=useState(null)
  const [ searchInput,setSearchInput]=useState("")




React.useEffect(() => {

fetch('http://localhost:7700/products')
	.then(response => response.json())
	.then(data => {
    setProducts(data)
    setData(data)
  
  })
	.catch(err => console.error(err));


}, []);

  const categoryAllProducts = data && data;
  const categoryScarves = data && data.filter((item) => item.category=== 'scarves')
  const categoryShoes = data && data.filter((item) => item.category === 'shoes')
  const categoryShorts = data && data.filter((item) => item.category === 'short')
  const categoryJackets = data && data.filter((item) => item.category === 'jacket')




const searchData =(e)=>{
let val = e.target.value

setSearchInput(val)

let newArr = []


products && products.map((el) => {

if(val === ""){
  newArr=[...data]
}
 
  else if(el.name.toUpperCase().indexOf(val.toUpperCase())!==-1){
   newArr.push(el)
  }

})

setProducts(newArr)


}
  

  return (
    <section>
 
      <div className="shop-page-image">
        <div className="shop-page-image__overlay">
          <h1>
MAĞAZA
          </h1>
        </div>
        <div className="shop-page-image__animation">
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
          <input type="name" name="name" value={searchInput} placeholder="Search"  onChange={(e)=>searchData(e)}/>
          <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
        <div onClick={arrowleftItem} className="filter-arrow">
<span>Filter</span>  <i ref={arrowLeft} class="fa-solid fa-chevron-left"></i>
        </div>
          <div className="shop-market-items">
            
          {<div ref={none} className="market-filter">
    <div onClick={arrowdownItem} className="filter-box">
    <span>Kateqoriya</span>
  <i ref={arrowDown} class="fa-solid fa-chevron-down"></i>
    </div>
    <div ref={dropdown} className="filters">
      <ul>
       
        <li onClick={(e)=>{setProducts(categoryAllProducts)}}>Hamısı</li>
        <li onClick={(e)=>{setProducts(categoryScarves)}}>Şərflər</li>
        <li onClick={(e)=>{setProducts(categoryShoes)}}>Ayaqqabılar</li>
        <li onClick={(e)=>{setProducts(categoryShorts)}}>Şortlar</li>
        <li onClick={(e)=>{setProducts(categoryJackets)}}>Gödəkçələr</li>
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
      <li>Kişi</li>
        <li>Qadın</li>
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
</div> }
<div ref={changeHtml} className="products"> 
  {
    products && products.map((product) => 
<Product key={product.id} product={product} count={product.count}/>
    )
  }

</div>
          </div>
    </div>
    </section>
  );
}
export default Shop;
