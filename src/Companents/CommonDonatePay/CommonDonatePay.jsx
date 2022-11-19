import React from 'react'
import { useState, useRef } from 'react'
import { handleValidate } from '../../utils/index'



function CommonDonatePay() {


const validateItem = () => {
  validateRef.current.style.display = "none"
}

  const validateRef = useRef();


    const [user,setUser] = useState({
        amount: "",
        name: "",
        surname: "",
        email: "",
        cardNumber: "",
        cardOwnName: "",
        date: "",
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
        console.log('send to the backend...')
        validateRef.current.classList.add("validateModalShow")
      }
      const changeInput = ({ target: { name, value } }) => {
        setUser(prev => ({...prev, [name] : value }))
      }

      const changeInputAmount = (e) => {
        let val = e.target.value
        setUser(prev => ({...prev, [e.target.name] : val}))
val = val.replace(/\D/g, '')
      }

      const changeInputName = (e) => {
        let val = e.target.value
        setUser(prev => ({...prev, [e.target.name] : val}))
      val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        val = val.replace(/[^a-zA-Z]+/, '')
      }

      const changeInputSurname = (e) => {
        let val = e.target.value
        setUser(prev => ({...prev, [e.target.name] : val}))
      val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase(); 
        val = val.replace(/[^a-zA-Z]+/, '')
      }

      const changeInputCardOwnName = (e) => {
        let val = e.target.value
        setUser(prev => ({...prev, [e.target.name] : val}))
      val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase(); 
        val = val.replace(/[^a-zA-Z]+/, '')
      }

      const changeInputCardNumber = (e) => {
        let val = e.target.value
        setUser(prev => ({...prev, [e.target.name] : val}))
val = val.replace(/\D/g, '')
     if(val.length>0){
      val = val.match(new RegExp(/.{1,4}/, 'g')).join(" ")
    }
      }

      const changeInputDate = (e) => {
        let val = e.target.value
        setUser(prev => ({...prev, [e.target.name] : val}))
val = val.replace(/\D/g, '')
if(val.length>0){
  val = val.match(new RegExp(/.{1,2}/, 'g')).join("/")
}
      }
      
      const changeInputCvv = (e) => {
        let val = e.target.value
        setUser(prev => ({...prev, [e.target.name] : val}))
val = val.replace(/\D/g, '')
      }

      
console.log(user)


  return (
    <section>
      <div ref={validateRef} className='validate-modal'>
<div className="validate-modal__icon">
<i class="fa-solid fa-check"></i>
</div>
<div className="validate-modal__text">
  <h3>Təşəkkürlər!</h3>
  <h5>Ödənişiniz uğurla təqdim <br /> edildi, Təşəkkürlər!</h5>
  <div onClick={validateItem} className='btn validate-btn'>Ok</div>
</div>
    </div>
    <div data-aos="fade-up" className="donation-content">
      <div className="donation-content__about">
        {/* <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} /> */}
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
        <form className='form' onSubmit={e => handleValidate(e, onSubmit)} noValidate>
          <label htmlFor="amount">İanə Məbləği *</label>
          <input  onChange={changeInputAmount}  name="amount" id='amount' placeholder='$' value={user.amount} required={true} minLength={1} maxLength={7}/>
          {errors.amount && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <label htmlFor="name">Ad *</label>
          <input onChange={(e) => changeInputName(e)} type="text" name="name" id="name" value={user.name} pattern="[A-Za-z]+" required={true} minLength={3} maxLength={11}/>
          {errors.name && <p style={{color: "red", fontSize: "12px",  lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <label htmlFor="surname">Soyad *</label>
          <input onChange={changeInputSurname} type="text" name="surname" id="surname" value={user.surname} required={true} pattern="[A-Za-z]+" minLength={3} maxLength={11}/>
          {errors.surname && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <label htmlFor="email">E-mail *</label>
          <input onChange={changeInput} type="text" name="email" id="email" value={user.email} pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$" required={true} />
          {errors.email && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <label htmlFor="nameofcardholder">Kart Sahibinin Adı *</label>
          <input onChange={changeInputCardOwnName}
            className="cardname"
            type="text"
            name="cardOwnName"
            id="nameofcardholder"
            value={user.cardOwnName}
            required={true}
            minLength={3}
            maxLength={17}
          />
          {errors.cardOwnName && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <label htmlFor="cardnumber">Kart Nömrəsi *</label>
          <input onChange={changeInputCardNumber}
            className="cardnumber"
            name="cardNumber"
            id="cardnumber"
                 value={user.cardNumber}
            placeholder="xxxx xxxx xxxx xxxx"
            required={true}
            minLength={19}
            maxLength={19}
          />
          <br />
          {errors.cardNumber && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <label htmlFor="date">Tarix *</label>
          <input onChange={changeInputDate}
          id="date"
            className="date"
            name="date"
            placeholder="mm/yy"
              value={user.date}
              required={true}
        minLength={5}
        maxLength={5}
          /> 
          {errors.date && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
           <label   htmlFor="cvv">Cvv *</label>
          <input onChange={changeInputCvv}
          id="cvv"
            className="cvv"
            name="cvv"
            placeholder="cvv"
                 value={user.cvv}
                 required={true}
                minLength={3}
      maxLength={3}
          />
          {errors.cvv && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <button type='submit'>Ödə</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default CommonDonatePay