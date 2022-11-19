import React from "react";
import { useParams } from "react-router-dom";
import { servicesApi } from "../../Service/apiService";
import { useState , useRef} from 'react'
function handleValidate(event, callback){
  event.preventDefault();
  event.stopPropagation();
  const inputs =  event.target.querySelectorAll("[name]")
  const errors = {}
  const data = {}

  for(let input of inputs){
    const isValid = input.checkValidity()
    data[input.name] = input.value
    if(!isValid){
      errors[input.name] = input.validationMessage
    }
  }

  callback({ errors, data, isError: Object.keys(errors).length > 0 })

}


function Pay() {
  const validateRef = useRef();
  const validateItem = () => {
    validateRef.current.style.display = "none"
  }
  let { id } = useParams();
  const { data } = servicesApi.useGetProductDetailsQuery(id);
  const [user,setUser] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    street: "",
    country: "",
    city: "",
    cardOwnName: "",
    cardOwnSurname: "",
    cardNumber: "",
    expiryDate : "",
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

  const changeInputNumber = (e) => {
    let val = e.target.value
    setUser(prev => ({...prev, [e.target.name] : val}))
val = val.replace(/\D/g, '')
  }

  const changeInputStreet = (e) => {
    let val = e.target.value
    setUser(prev => ({...prev, [e.target.name] : val}))
  val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    val = val.replace(/[^a-zA-Z]+/, '')
  }

  const changeInputCountry = (e) => {
    let val = e.target.value
    setUser(prev => ({...prev, [e.target.name] : val}))
  val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    val = val.replace(/[^a-zA-Z]+/, '')
  }

  const changeInputCity = (e) => {
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

  const changeInputCardOwnSurname = (e) => {
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
      <div>
        <div className="pay__cart-checkout">
          <span>Yoxla</span>
          <span>Məhsulu yoxla</span>
        </div>
      </div>
      <div className="pay__content">
        <div className="pay__shipping-address">
          <h3>Çatdırılma Ünvanı</h3>
          <div className="pay__inputs">
            <form className='form' onSubmit={(e) => handleValidate(e,onSubmit)} noValidate>
              <label htmlFor="name">Ad*</label>
              <input onChange={changeInputName} type="text" name="name" id="name" value={user.name} required={true} minLength={3} maxLength={11}/>
          {errors.name && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
              <label htmlFor="surname">Soyad*</label>
              <input onChange={changeInputSurname} type="text" name="surname" id="" value={user.surname} required={true} minLength={3} maxLength={11}/>
          {errors.surname && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
              <label htmlFor="email">Email Address*</label>
              <input onChange={changeInput} type="email" name="email" id="email" value={user.email} pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$" required={true}/>
          {errors.email && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
              <label htmlFor="number">Nömrə*</label>
              <input onChange={changeInputNumber} type="text" name="number" id="number" value={user.number} required={true} placeholder={"+994"} minLength={16}/>
              {errors.number && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
              <label htmlFor="street">Küçə*</label>
              <input onChange={changeInputStreet} type="text" name="street" id="street" value={user.street} required={true}/>
          {errors.street && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
              <label htmlFor="country">Ölkə*</label>
              <input onChange={changeInputCountry} type="text" name="country" id="country" value={user.country} required={true}/>
          {errors.country && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
              <label htmlFor="city">Şəhər*</label>
              <input onChange={changeInputCity} type="text" name="city" id="city" value={user.city} required={true}/>
          {errors.city && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
            {/* </form> */}
          {/* </div> */}
          {/* <div className="payment-method"> */}
            <h3>Ödəniş üsulu</h3>
            {/* <div className="payment-method__inputs"> */}
              {/* <form className='form' onSubmit={(e) => handleValidate(e,onSubmit)} noValidate> */}
                <label htmlFor="cardOwnName">Kart sahibinin adı*</label>
                <input onChange={changeInputCardOwnName} type="text" name="cardOwnName" id="firstName" value={user.cardOwnName} required={true} minLength={3} maxLength={17}/>
          {errors.cardOwnName && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
                <label htmlFor="cardOwnSurname">Kart sahibinin soyadı*</label>
                <input onChange={changeInputCardOwnSurname} type="text" name="cardOwnSurname" id="lastName" value={user.cardOwnSurname} required={true} minLength={3} maxLength={17}/>
          {errors.cardOwnSurname && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
                <label htmlFor="cardNumber">Kart nömrəsi*</label>
                <input onChange={changeInputCardNumber} type="text" name="cardNumber" id="cardNumber" value={user.cardNumber} required={true} minLength={19} maxLength={19}/>
          {errors.cardNumber && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
                <label htmlFor="expiryDate">Son istifadə tarixi*</label>
                <input onChange={changeInputDate} type="text" name="expiryDate" id="expryDate" value={user.expiryDate} required={true}   minLength={5} maxLength={5}/>
          {errors.expiryDate && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
                <label htmlFor="cvv">Cvv/Cvv2*</label>
                <input onChange={changeInputCvv} type="text" name="cvv" id="cvv" value={user.cvv} required={true} minLength={3}    maxLength={3}/>
          {errors.cvv && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu tələb olunur</p>}
          <button className="btn pay-btn" type="submit">SİFARİŞ VERİN</button>
              </form>
            {/* </div> */}
          </div>
        </div>
        <div className="pay__product-cart">
          <div className="order-summary">
            <h3>Sifariş</h3>
            {data && (
              <div className="order-summary__content">
                <div className="order-summary__content__items">
                  <img src={data.image} alt="" />
                  <div className="order-summary__image__text">
                    <h3>{data.name}</h3>
                    <span>Qiyməti: ${data.price}.00</span>
                  </div>
                </div>
                <div className="order-summary__total">
                  <p>
                    <span>Cəmi</span>
                    <span>US${data.price}.00</span>
                  </p>
                  <p>
                    <span>Vergi</span>
                    <span>US${data.shipping}</span>
                  </p>
                  <p>
                    <span>Göndərmə</span>
                    <span>US$0.00</span>
                  </p>
                  <p>
                    <span>Ümumi</span>
                    <span>US${data.price + data.shipping}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pay;
