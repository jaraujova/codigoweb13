const inputName = document.querySelector(".input_name")
console.log(inputName)

const inputEmail = document.querySelector("#input_email")
console.log(inputEmail.value)

const form = document.querySelector("form")
console.log(form)

const inputs = document.querySelectorAll("input")
console.log(inputs)

inputs.forEach((input) =>{
    console.log(input.value)
})