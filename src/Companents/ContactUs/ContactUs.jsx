import React from 'react'
import { useNavigate } from 'react-router-dom'
function ContactUs() {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/contact')} className='contactUs'>
<a>Bizimlə Əlaqə</a>
    </div>
  )
}

export default ContactUs