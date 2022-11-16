import React from 'react'
import { useState } from 'react'
import { handleValidate } from '../../utils/index'

function CommonDonatePay() {
    const [user,setUser] = useState({
        amount: "",
        name: "",
        surname: "",
        email: "",
        cardNumber: "",
        cardOwnName: "",
        year: "",
        cvv: ""
      })

      const [errors, setErrors] = useState({});
console.log(errors)
      const onSubmit = ({isError,errors,data}) => {
        setErrors({})
        if(isError){
          setErrors(errors)
          return;
        }
        console.log('backende gonderilir...')
       
      }
      const changeInput = ({ target: { name, value } }) => {
        setUser(prev => ({...prev, [name] : value }))
      }
      
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
        <form onSubmit={e => handleValidate(e, onSubmit)} action="" noValidate>
          <label htmlFor="amount">İanə Məbləği *</label>
          <input onChange={changeInput} type="text" name="amount" id='amount' value={user.amount} required/>
          {errors.amount && <p>{errors.amount}</p>}
          <label htmlFor="name">Ad *</label>
          <input onChange={changeInput} type="text" name="name" id="name" value={user.name} pattern="[A-Za-z]+" />
          {errors.name && <p>{errors.name}</p>}
          <label htmlFor="surname">Soyad *</label>
          <input onChange={changeInput} type="text" name="surname" id="surname" value={user.surname} />
          <label htmlFor="email">E-mail *</label>
          <input onChange={changeInput} type="text" name="email" id="email" value={user.email}/>
          <label htmlFor="nameofcardholder">Kart Sahibinin Adı *</label>
          <input onChange={changeInput}
            className="cardname"
            type="number"
            name="cardOwnName"
            id="nameofcardholder"
            value={user.cardOwnName}
          />

          <label htmlFor="cardnumber">Kart Nömrəsi *</label>
          <input onChange={changeInput}
            className="cardnumber"
            type="text"
            name="cardNumber"cardOwnName
            id="cardnumber"
                 value={user.cardNumber}
            placeholder="0000 0000 0000 0000"
          />
          <br />
          <input onChange={changeInput}
            className="time"
            type="text"
            name="year"
            placeholder="MM/YY"
              value={user.year}
          />
          <input onChange={changeInput}
            className="cvv"
            type="text"
            name="cvv"
            placeholder="CVV2"
                 value={user.cvv}
          />
          <button type='submit'>Ödə</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default CommonDonatePay