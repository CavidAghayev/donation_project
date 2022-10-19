import React from 'react'
import { NavLink,useLocation, useNavigate } from 'react-router-dom'
import {useEffect,useState,useRef} from 'react'
function Header() {
  const menuItem = useRef();
  const menuRemove = useRef();
  const {pathname} = useLocation();
  const [modalSearch,setmodalSearch] = useState(false);
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
              <NavLink className='navLink' to='/about'>Haqqımızda</NavLink>
              <NavLink className='navLink' to='/projects'>Sosyal Layihələr</NavLink>
              <NavLink className='navLink' to='/shop'>Mağaza</NavLink>
              <NavLink className='navLink' to='/news'>Hekayələr</NavLink>
              <NavLink className='navLink' to='/contact'>Əlaqə</NavLink>
              <NavLink className='donate' to="/commondonate" >Ümumi İanə</NavLink>
            </ul>
          </div>
            <div className="headerBasket">
            <NavLink className='navLink' to="/addtobasket">
              <i className="fa-solid fa-basket-shopping"></i>
            </NavLink>
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
              <NavLink className='li' to='/about'>Haqqımızda</NavLink>
              <NavLink className='li' to='/projects'>Sosyal Layihələr</NavLink>
              <NavLink className='li' to='/news'>Hekayələr</NavLink>
              <NavLink className='li' to='/shop'>Mağaza</NavLink>
              <NavLink className='li' to='/contact'>Əlaqə</NavLink>
              <NavLink className='donate' to="/commondonate" >Ümumi İanə</NavLink>
              <NavLink className='loginer' to='/login'>Daxil Ol</NavLink>
            </ul>
        </div>
    </header>
  )
}

export default Header