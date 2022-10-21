import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom'
function About() {
  const navigate = useNavigate();
  return (
    <section>
      <div className='about-page-back-image'>
        <div className="about-page-back-image__overlay">
            <h1>
                      HAQQIMIZDA
            </h1>
        </div>
        <div className="about-page-back-image__animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="about-page-back-image__text">
        <p><a href='/'>HƏYAT FONDU</a> qeyri-kommersiya təşkilatıdır. Uzun müddətdir biz  etibarlı,  icma tərəfindən <br /> idarə olunan təşkilatlara dünyamızı daha yaxşı bir yerə çevirmək üçün lazım olan alətlərə, <br /> təlimlərə və dəstəyə daxil olmaqda kömək etmişik.
        Biz insanların potensialına inanırıq. <br /> Biz potensialı dəstəkləyirik  və nəticələrimiz dəyişdirilən həyatlarla ölçülür. Hər kəsin <br /> hekayəsi  unikaldır və proqramlarımız onların faydalandığı insanlar qədər müxtəlifdir.
        </p>
      </div>
    <div className="about-statistics">
<div className="about-statistics__content">
  <div className="about-statistics__numbers">
    <h5>2002-ci ildən, biz daha çox kömək etdik</h5>
    <span>$743M</span>
    <h5>-dan</h5>
    <span>1,611,280</span>
    <h5>sizin kimi dəstək olan insanlar</h5>
    <span>32,536</span>
    <h5>layihələri</h5>
    <span>175+</span>
    <h5>ölkələr.</h5>
  </div>
  <div className="about-statistics__map">
    <img src="https://www.globalgiving.org/img/aboutus/About_overview_map_1024w.png" alt="" />
  </div>
</div>
    </div>
  <div className="about-easy-donations">
<h1>Təhlükəsiz + Asan Bağışlar</h1>
<p>Biz insanlara bütün dünyada yoxlanılmış, yerli idarə olunan təşkilatlara təhlükəsiz  və asan ABŞ vergisi tutula bilən <br /> ianələr etməkdə kömək edirik. ABŞ-da ianələr vergidən çıxılır və ya Böyük Britaniya vergi ödəyiciləri  GBP ilə <br /> verə və Hədiyyə Yardımı uyğun olarsa, əlavə 25% tələb edə bilərlər. Həyat Fondu vasitəsilə <br /> verməyi sevəcəyinizə o qədər əminik ki, biz ianə məmnuniyyəti zəmanəti təklif edirik.</p>
  <div className='btn' onClick={()=>navigate('/projects')}>LAYİHƏ TAPIN</div>
  </div>
  <div className="about-apply">
      <div className="about-apply__image">
        <img src="https://www.globalgiving.org/img/aboutus/About_overview_join1_1024w.jpg" alt="" />
        <div className="about-apply__join-us">
<div className="about-apply__join-us__content">
<h1>Bizə Qoşul</h1>
<p>Biz 175+ ölkədə fəaliyyət göstərən və icmalarının həqiqətən <br /> ehtiyac duyduğu layihələri dərc edən qeyri-kommersiya <br /> təşkilatları ilə əməkdaşlıq etdik. Bizə qoşulmaq  <br /> istəyirsiniz?</p>
      <div className='btn' onClick={()=>navigate('/aboutapplyhere')}>Bura müraciət edin</div>
</div>
        </div>
      </div>
  </div>
  <div className="about-apply__images">
    <img src="https://www.globalgiving.org/img/aboutus/About_overview_join2.jpg" alt="" />
    <img src="https://www.globalgiving.org/img/aboutus/About_overview_join3.jpg" alt="" />
    <img src="https://www.globalgiving.org/img/aboutus/About_overview_join4.jpg" alt="" />
    <img src="https://www.globalgiving.org/img/aboutus/About_overview_join5.jpg" alt="" />
  </div>
  <div className="corporate-partnerships">
    <h1>Korporativ Tərəfdaşlıqlar</h1>
    <p>Biz şirkətlərə güclü korporativ sosial məsuliyyət, qrantların verilməsi <br /> və işçilərin cəlb edilməsi strategiyalarını inkişaf etdirməyə <br /> kömək edirik.</p>
 <div className='btn' onClick={()=>navigate('/corporatepartnerships')}>Daha çoxu</div>
  </div>
  <div className="disaster-response">
<div className="disaster-response__content">
  <h1>Fəlakətə Cavab</h1>
  <p>Fəlakət baş verdikdə, yardım və bərpa işlərini <br /> aparmaq üçün ən uyğun olan yerli təşkilatlara <br /> tez vəsait göndərə bilərik.</p>
<div className='btn orange-btn' onClick={()=>navigate('/disasterResponse')}>Daha çoxu</div>
</div>
  </div>
  <div className="bullent">
  <h3><span>Həyat Fond</span> - dan xəbərlər alın:</h3>
  <div className="bullent__content">
  <input  type="email" name="" id="email" placeholder='Enter e-mail address' />
  <div className="btn">Abunə olun</div> 
  </div>
      </div>
    </section>

  )
}

export default About;