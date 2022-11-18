// export function handleValidate(event, callback){
//   event.preventDefault();
//   event.stopPropagation();
//   const inputs =  event.target.querySelectorAll("[name]")
//   const errors = {}
//   const data = {}

//   for(let input of inputs){
//     const isValid = input.checkValidity()
//     data[input.name] = input.value
//     if(!isValid){
//       errors[input.name] = input.validationMessage
//     }
//   }

//   callback({ errors, data, isError: Object.keys(errors).length > 0 })

// }