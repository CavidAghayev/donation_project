import React from 'react'
function Contact() {
  return (
    <section>
      <div className='contact'>
<div className="contact__title">
  <h3>Bütün proqram təminatı ehtiyaclarınız üçün bu gün bizimlə əlaqə saxlayın</h3>
</div>
<div className="contact__items">
  <div className="contact__form">
  <div className="contact__form__inputs">
  <div className="contact__form__inputs__title">
      <h4>Aşağıdakı formanı doldurmaqla istənilən vaxt bizimlə əlaqə <br /> saxlayın və biz qısa zamanda sizinlə əlaqə saxlayacağıq.</h4>
    </div>
<input type="name" placeholder='Ad'/>
<input type="surname" placeholder='Soyad'/>
<input type="email" placeholder='E-mail'/>
<input type="number" placeholder='Nömrə'/>
<textarea name="" id="" cols="30" rows="10" placeholder='Biz sizə necə kömək edə bilərik?'></textarea>
<button>Mesaj Göndərin</button>
  </div>
  </div>
  <div className="contact-content">
<h2>Əlaqə məlumatı</h2>
<h4>Poçt ünvanı:</h4> 
<i className="fa-regular fa-envelope"><span>info@həyatfondu.org</span></i>
<h4>Əlaqə:</h4>
<i className="fa-solid fa-phone"><span>+994 612-217-0747</span></i>
<h4>Bizi İzləyin:</h4>
<div className="contact-content__nav">
<a href="https://twitter.com/" target='_blank'><i className="fa-brands fa-twitter-square"></i></a>
                                <a href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook-square"></i></a>
</div>

</div>
</div>
  </div>
    </section>
  )
}

export default Contact;