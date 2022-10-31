import React from 'react'
import SelectPartner from '../SelectPartner/SelectPartner';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "swiper/css";
import "swiper/css/navigation";
function CorporatePartnerships() {
  const [selectPartners,setSelectPartners] = useState(null)
React.useEffect(()=>{
  fetch("http://localhost:7700/selectPartners")
   .then((response) => response.json())
   .then((data) => setSelectPartners(data))
},[]);
  const navigate = useNavigate();
  return (
    <section>
      <div class="corporative-partnership-companies">   
<div className="corporative-partnership-companies__overlay">
  <div className="corporative-partnership-companies__overlay__after">
    <a href="">Ümumi Baxış</a>
    <a href="">Araşdırmalar</a>
    <a href="">Tərəfdaşlar</a>
    <a href="/contact">Bizimlə əlaqə saxlayın</a>
  </div>
  <h1>Şirkətlər</h1>
</div>
    </div>
    <div className="select-partners">
      <div className="select-partners__title">
        <h1>Seçilmiş Partnyorlar</h1>
      </div>
      <div className="select-partners__content">
      { selectPartners && 
       selectPartners.map((a) => <SelectPartner key={a.id} partner={a}/>) 

      }
      </div>
    </div>
    <div className="send-message">
      <h1>Biz kömək etmək üçün buradayıq!</h1>
      <p>Xeyriyyəçiliyinizlə fərq yaratmağa hazırsınız? <br />

Xeyriyyəçilik və ya KSM proqramınızla təsir etməkdə sizə necə <br /> kömək edə biləcəyimizi bizə bildirin.</p>
<p>+994 612-217-0747 nömrəsinə zəng edin və ya bizə e-poçt göndərin.</p>  
   <div className='btn' onClick={()=>navigate('/contact')}>Bizə Mesaj Göndərin</div>
    </div>
    </section>
  )
}

export default CorporatePartnerships