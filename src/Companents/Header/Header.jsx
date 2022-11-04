import React from 'react'
import { NavLink,useLocation, useNavigate } from 'react-router-dom'
import {useEffect,useState,useRef} from 'react'
import { useSelector } from 'react-redux'
function Header() {
  const cart = useSelector((state) => state.cartReducer.cart)
  const menuItem = useRef();
  const {pathname} = useLocation();
  const list = () => {
  menuItem.current.classList.add("show")
  } 
  const listRemove = () => {
    menuItem.current.classList.remove("show")
    } 
useEffect(()=>{
  window.scrollTo(0,0);
},[pathname])   
const navigate = useNavigate();
const [products, setProducts] = useState([]);
React.useEffect(()=>{
  fetch("http://localhost:7700/products")
  .then((response) => response.json()).
  then((data) => setProducts(data))
},[]);
  return (
    <header>
        <div className="header-content">
          <div onClick={()=>navigate("/")} className="header-logo">
            <i className="fa-brands fa-pagelines"></i>
              <h3>Həyat Fondu</h3>
          </div>
          <div className="header-menu">  
            <ul>
              <li>
              <NavLink className='nav' to='/about'>Haqqımızda</NavLink>
              </li>
<li>
<NavLink className='nav' to='/projects'>Sosyal Layihələr</NavLink>
</li>
<li>
<NavLink className='nav' to='/shop'>Mağaza</NavLink>
</li>
<li>
<NavLink className='nav' to='/news'>Hekayələr</NavLink>
</li>
<li>
<NavLink className='nav' to='/contact'>Əlaqə</NavLink>
</li>
<li>
<NavLink className='donate' to="/commondonate" >Ümumi İanə</NavLink>
</li>
            </ul>
          </div>
            <div onClick={()=>navigate("/addtobasket")} className="header-basket">
              <i className="fa-solid fa-basket-shopping"></i>
            {
              
            }
          </div>
        </div>  
        <div className="header-menu--icon">
<i onClick={list} className="fa-solid fa-bars"></i>
</div>
    <div  ref={menuItem} className="menu-list">
      <div className="menuList-remove">
       <i onClick={listRemove} class="fa-solid fa-xmark"></i>
       </div>
       <ul>
              <li>
              <NavLink className='nav' to='/about'>Haqqımızda</NavLink>
              </li>
<li>
<NavLink className='nav' to='/projects'>Sosyal Layihələr</NavLink>
</li>
<li>
<NavLink className='nav' to='/shop'>Mağaza</NavLink>
</li>
<li>
<NavLink className='nav' to='/news'>Hekayələr</NavLink>
</li>
<li>
<NavLink className='nav' to='/contact'>Əlaqə</NavLink>
</li>
<li>
<NavLink className='donate' to="/commondonate" >Ümumi İanə</NavLink>
</li>
            </ul>
        </div>
    </header>
  )
}

export default Header