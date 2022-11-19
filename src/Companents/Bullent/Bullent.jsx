import React from 'react'
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
function Bullent() {
  const validateItem = () => {
    validateRef.current.style.display = "none"
  }
  
    const validateRef = useRef();
  
  
      const [user,setUser] = useState({
          email: "",
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
        const changeInputEmail = (e) => {
          let val = e.target.value
          setUser(prev => ({...prev, [e.target.name] : val}))
        }
        console.log(user)
  return (
    <div data-aos="fade-up" className="bullent">
    <div ref={validateRef} className='validate-modal'>
<div className="validate-modal__icon">
<i class="fa-solid fa-check"></i>
</div>
<div className="validate-modal__text">
  <h3 style={{fontSize: "14px"}}>Təşəkkürlər!</h3>
  <h5>Abunəliyniz uğurla başa <br /> çatdırıldı, Təşəkkürlər!</h5>
  <div onClick={validateItem} className='btn validate-btn'>Ok</div>
</div>
    </div>
        <h3>
          <span>Həyat Fond</span> - dan xəbərlər alın:
        </h3>
        <div className="bullent__content">
          <form className='form' onSubmit={(e) => handleValidate(e,onSubmit)}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter e-mail address"
            onChange={changeInputEmail}
            pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$" required={true}
          />
          <button className="btn">Abunə olun</button>
          </form>
        </div>
      </div>
  )
}

export default Bullent