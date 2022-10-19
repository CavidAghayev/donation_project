import React from 'react'
import { NavLink,useLocation, useNavigate } from 'react-router-dom'
import {useEffect,useState,useRef} from 'react'
function Header() {
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
  return (
    <header>
        <div className="headerContent">
          <div onClick={()=>navigate("/")} className="headerLogo">
            <i className="fa-brands fa-pagelines"></i>
              <h3>Həyat Fondu</h3>
          </div>
          <div className="headerMenu">  
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
            <div onClick={()=>navigate("/addtobasket")} className="headerBasket">
              <i className="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
        <div className="headerMenu-icon">
<i onClick={list} className="fa-solid fa-bars"></i>
</div>
    <div  ref={menuItem} className="menuList">
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