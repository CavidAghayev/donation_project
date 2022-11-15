import React from 'react'
import { useForm } from 'react-hook-form'
function CommonDonatePay() {
  const { register, handleSubmit, error } = useForm();
     const onSubmit = () => {}
  return (
    <section>
    <div data-aos="fade-up" className="donation-content">
      <div className="donation-content__about">
        <div className="donation-content__image">
          <img
            src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/"
            alt=""
          />
        </div>
        <div className="donation-content__text">
          <i className="fa-brands fa-pagelines"></i>
          <span>Həyat Fondu</span>
          <h3>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h3>
          <p>
            Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı insanların
            həyatını xilas etmək, ən ucqar ərazilərə təmiz su gətirmək,
            uşaqları, xüsusilə qızları məktəbə göndərmək və qadınların
            hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.
          </p>
        </div>
      </div>
      <div className="donation__pay">
        <h1>İANƏ ET</h1>
        <p>
          Siz bu İanə Et tətbiqindən istidafə edərək Afrikada <br />
          yaşayan insanların ehtiyaclarının da qarşılanması üçün <br />
          istifadə edə və ianə-i edə bilərsiniz.
        </p>
        <form action="">
          <label htmlFor="text">İanə Məbləği *</label>
          <input type="text" va />
          

          <label htmlFor="name">Ad *</label>
          <input type="text"  id="name" />


          <label htmlFor="surname">Soyad *</label>
          <input type="text" id="surname" />


          <label htmlFor="email">E-mail *</label>
          <input type="text" name="email" id="email" v/>

          
          <label htmlFor="nameofcardholder">Kart Sahibinin Adı *</label>
          <input
            className="cardname"
            type="text"
            id="nameofcardholder"
          />

          <label htmlFor="cardnumber">Kart Nömrəsi *</label>
          <input
            className="cardnumber"
            type="number"
            id="cardnumber"
            placeholder="0000 0000 0000 0000"
          />
          <br />
          <input
            className="time"
            type="text"
            name="year"
            placeholder="mm/yy"
          />
          <input
            className="cvv"
            type="text"
            placeholder="cvv"
          />
        </form>
        <button type='submit'>Ödə</button>
      </div>
    </div>
  </section>
  )
}

export default CommonDonatePay