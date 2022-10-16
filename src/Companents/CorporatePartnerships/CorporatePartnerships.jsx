import React from 'react'
import {servicesApi} from "../../Service/apiService"
import SelectPartner from '../SelectPartner/SelectPartner';
import "swiper/css";
import "swiper/css/navigation";
function CorporatePartnerships() {
  const {data: selectPartners} = servicesApi.useGetSelectPartnersQuery();
  return (
    <section>
      <div class="corporativepartnership-companies">   
<div className="overlay">
  <div className="overlay-after">
    <a href="">Ümumi Baxış</a>
    <a href="">Araşdırmalar</a>
    <a href="">Tərəfdaşlar</a>
    <a href="/contact">Bizimlə əlaqə saxlayın</a>
  </div>
  <h1>Şirkətlər</h1>
</div>
    </div>
    <div className="select-partners">
      <div className="title">
        <h1>Seçilmiş Partnyorlar</h1>
      </div>
      <div className="container">
      <div className="partners-content">
      { selectPartners && 
       selectPartners.map((a) => <SelectPartner key={a.id} partner={a}/>) 

      }
      </div>
      </div>
    </div>
    <div className="send-message">
      <h1>Biz kömək etmək üçün buradayıq!</h1>
      <p>Xeyriyyəçiliyinizlə fərq yaratmağa hazırsınız? <br />

Xeyriyyəçilik və ya KSM proqramınızla təsir etməkdə sizə necə <br /> kömək edə biləcəyimizi bizə bildirin.</p>
<p>+994 612-217-0747 nömrəsinə zəng edin və ya bizə e-poçt göndərin.</p>  
   <button onClick={()=>window.location='/contact'}>Bizə Mesaj Göndərin</button>
    </div>
    </section>
  )
}

export default CorporatePartnerships