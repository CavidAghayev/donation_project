import React from "react";
import { useState, useRef } from 'react'
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
function Contact() {
  const validateItem = () => {
    validateRef.current.style.display = "none"
  }
  
    const validateRef = useRef();
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

  const [user,setUser] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    message: ""
  })
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

  const changeInputEmail = (e) => {
    let val = e.target.value
    setUser(prev => ({...prev, [e.target.name] : val}))
  }

  const changeInputNumber = (e) => {
    let val = e.target.value
    setUser(prev => ({...prev, [e.target.name] : val}))
val = val.replace(/\D/g, '')
  }

  const changeInputMessage = (e) => {
    let val = e.target.value
    setUser(prev => ({...prev, [e.target.name] : val}))
  val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    val = val.replace(/[^a-zA-Z]+/, '')
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
  <h5>Mesajınız uğurla göndərildi <br /> Təşəkkürlər!</h5>
  <div onClick={validateItem} className='btn validate-btn'>Ok</div>
</div>
    </div>
      <div className="contact">
        <div data-aos="fade-up" className="contact__title">
          <h3>
            Bütün proqram təminatı ehtiyaclarınız üçün bu gün bizimlə əlaqə
            saxlayın
          </h3>
        </div>
        <div data-aos="fade-up" className="contact__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1789798585946!2d49.82203171525669!3d40.38272567936907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1saz!2s!4v1663570912328!5m2!1saz!2s"></iframe>
        </div>
        <div data-aos="fade-up" className="contact__items">
          <div className="contact__form">
            <div className="contact__form__inputs">
              <div className="contact__form__inputs__title">
                <h4>
                  Aşağıdakı formanı doldurmaqla istənilən vaxt bizimlə əlaqə{" "}
                  <br /> saxlayın və biz qısa zamanda sizinlə əlaqə
                  saxlayacağıq.
                </h4>
              </div>
              <form className="form" onSubmit={(e) => handleValidate(e,onSubmit)}>
              <input onChange={changeInputName} name="name" type="text" placeholder="Ad" />
              <input onChange={changeInputSurname} name="surname" type="text" placeholder="Soyad" />
              <input onChange={changeInputEmail} name="email" type="text" placeholder="E-mail" />
              <input onChange={changeInputNumber} name="number" type="number" placeholder="Nömrə" />
              <textarea
              onChange={changeInputMessage}
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Biz sizə necə kömək edə bilərik?"
              ></textarea>
              <button type="sutmit">Mesaj Göndərin</button>
              </form>
            </div>
          </div>
          <div className="contact-content">
            <h2>Əlaqə məlumatı</h2>
            <h4>Poçt ünvanı:</h4>
            <i className="fa-regular fa-envelope">
              <span>info@həyatfondu.org</span>
            </i>
            <h4>Əlaqə:</h4>
            <i className="fa-solid fa-phone">
              <span>+994 612-217-0747</span>
            </i>
            <h4>Bizi İzləyin:</h4>
            <div className="contact-content__nav">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
