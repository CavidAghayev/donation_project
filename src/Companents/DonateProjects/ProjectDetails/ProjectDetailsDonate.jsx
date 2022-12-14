import React from "react";
import { servicesApi } from "../../../Service/apiService";
import { useParams } from "react-router-dom";
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
function ProjectDetailsDonate() {
  let { id } = useParams();
  const {
    data: project,
    error,
    isLoading,
  } = servicesApi.useGetProjectQuery(id);
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
  <h3>T??????kk??rl??r!</h3>
  <h5>??d??ni??iniz u??urla t??qdim <br /> edildi, T??????kk??rl??r!</h5>
  <div onClick={validateItem} className='btn validate-btn'>Ok</div>
</div>
    </div>
      {project && (
        <div data-aos="fade-up" className="donation-content">
        <div className="donation-content__about">
          {/* <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} /> */}
          <div className="donation-content__image">
            <img
              src={project.image}
              alt=""
            />
          </div>
          <div className="donation-content__text">
            <i className="fa-brands fa-pagelines"></i>
            <span>H??yat Fondu</span>
            <h3>H??yat Fondu yoxsullu??a son qoymaq ??????n h??r g??n ??al??????r.</h3>
            <p>
              Amma biz sizsiz ed?? bilm??rik. Siz biz?? f??lak??t zaman?? insanlar??n
              h??yat??n?? xilas etm??k, ??n ucqar ??razil??r?? t??miz su g??tirm??k,
              u??aqlar??, x??susil?? q??zlar?? m??kt??b?? g??nd??rm??k v?? qad??nlar??n
              h??quqlar??n?? m??dafi?? etm??kd?? k??m??k ed?? bil??rsiniz.
            </p>
          </div>
        </div>
        <div className="donation__pay">
          <h1>??AN?? ET</h1>
          <p>
            Siz bu ??an?? Et t??tbiqind??n istidaf?? ed??r??k Afrikada <br />
            ya??ayan insanlar??n ehtiyaclar??n??n da qar????lanmas?? ??????n <br />
            istifad?? ed?? v?? ian??-i ed?? bil??rsiniz.
          </p>
          <form className='form' onSubmit={e => handleValidate(e, onSubmit)} noValidate>
            <label htmlFor="amount">??an?? M??bl????i *</label>
            <input  onChange={changeInputAmount}  name="amount" id='amount' placeholder='$' value={user.amount} required={true} minLength={1} maxLength={7}/>
            {errors.amount && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
            <label htmlFor="name">Ad *</label>
            <input onChange={(e) => changeInputName(e)} type="text" name="name" id="name" value={user.name} pattern="[A-Za-z]+" required={true} minLength={3} maxLength={11}/>
            {errors.name && <p style={{color: "red", fontSize: "12px",  lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
            <label htmlFor="surname">Soyad *</label>
            <input onChange={changeInputSurname} type="text" name="surname" id="surname" value={user.surname} required={true} pattern="[A-Za-z]+" minLength={3} maxLength={11}/>
            {errors.surname && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
            <label htmlFor="email">E-mail *</label>
            <input onChange={changeInput} type="text" name="email" id="email" value={user.email} pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$" required={true} />
            {errors.email && <p  style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
            <label htmlFor="nameofcardholder">Kart Sahibinin Ad?? *</label>
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
            {errors.cardOwnName && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
            <label htmlFor="cardnumber">Kart N??mr??si *</label>
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
            {errors.cardNumber && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
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
            {errors.date && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
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
            {errors.cvv && <p style={{color: "red", fontSize: "12px", lineHeight: "0px", position: "absolute"}}>Bu t??l??b olunur</p>}
            <button type='submit'>??d??</button>
          </form>
        </div>
      </div>
      )}
    </section>
  );
}

export default ProjectDetailsDonate;
