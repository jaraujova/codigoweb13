const inputs = document.getElementsByTagName("input")

const newInputs = Array.from(inputs)
console.log("inputs", inputs)
console.log("newInpust", newInputs)

newInputs.map(newInput => {
    console.log("newInput", newInput)
})


const form = document.getElementsByTagName("form")
const button = document.getElementsByTagName("button")

const divContent = document.getElementsByTagName("div");
console.log("Div content", divContent)
const newDivContent = Array.from(divContent)
console.log("new div content", newDivContent)

newDivContent.forEach((Element) =>{
    console.log("elemento", Element)
})

const inputEmail = document.getElementById("input_email")
console.log("input-Email",inputEmail.value)

inputEmail.value = "julio"
inputEmail.style.backgroundColor = "#f01";


const inputPassword = document.getElementById("input_password")
console.log(inputPassword.value)
inputPassword.style.backgroundColor = "#000";
inputPassword.style.color = "#fff";


const inputsName = document.getElementsByClassName("input_name")
console.log(inputsName)

const newInputName = Array.from(inputsName)
console.log(newInputName)

newInputName.forEach((input)=>{
    console.log(input.value)
})

const buttons = document.getElementsByClassName("btn-registro")
console.log(button)
