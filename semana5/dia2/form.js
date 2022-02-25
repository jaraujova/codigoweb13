/*
let nombres = [];

function obtenerValoresDelInput(event){
    console.log(event.target.value)
    console.log(event.target.name)
    nombres.push(event.target.value)
}
*/
let validacionCorreo = false;
let validacionPassword = false;
let validacionTelefono = false;


function validarCorreo(event){
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(emailRegex.test(event.target.value))
    const emailError = document.querySelector('#email-error')
    if(!emailRegex.test(event.target.value)){
        emailError.style.display = "block"
        validacionCorreo = false
        validarInputsNoVacios()
    }else{
        emailError.style.display = "none"
        validacionCorreo = true
        habilitarBoton();
    }
    
}

function validarPassword(event){
    const password = event.target.value.length;
    const passwordError = document.querySelector('#password-error')
    if(password<=8){
        passwordError.style.display = "block"
        validacionPassword = false
        validarInputsNoVacios();

    }else{
        passwordError.style.display = "none"
        validacionPassword= true
        validarInputsNoVacios();
    }
    
}


function validartelefono(event){
    const telefono = event.target.value.length;
    const telefonoError = document.querySelector('#telefono-error')
    if (telefono < 9){
        telefonoError.style.display = "block"
        validacionTelefono = false
        validarInputsNoVacios()
    }else{
        telefonoError.style.display = "none"
        validacionTelefono = true
        validarInputsNoVacios()
    }
    
}


if(validacionCorreo && validacionPassword && validacionTelefono){
    habilitarBoton()
} else {
    deshabilitarBoton()
}



function validarInputsNoVacios(){
    const inputs = Array.from(document.querySelectorAll("input"))
    const botonCrearUsuario = document.querySelector('#btn-crear-usuario')
    for (let i =0; i < inputs.length; i++){
        if(inputs[i].value ===""){
            deshabilitarBoton()
            return
        }
    }
            habilitarBoton()
}

function deshabilitarBoton(){
    const botonCrearUsuario = document.querySelector('#btn-crear-usuario')
    botonCrearUsuario.disabled = true
    botonCrearUsuario.style.backgroundColor = "#ccc" 
    botonCrearUsuario.style.color = "#f01"
}

function habilitarBoton(){
    botonCrearUsuario.disabled = false
    botonCrearUsuario.style.backgroundColor = "#8a2be2" 
    botonCrearUsuario.style.color = "#fff"

}


const botonCrearUsuario = document.querySelector('#btn-crear-usuario')

let usuario =[];

botonCrearUsuario.addEventListener("click", function(event){

    event.preventDefault()

    console.log("clic del boton")

    const inputs = document.querySelectorAll("input")
    const tableBody = document.querySelector('#table-body')
    //paso 2 creo un tr

    const tr = document.createElement("tr")
    inputs.forEach((input) =>{
        const td = document.createElement("td")
        const value = document.createTextNode(input.value)
        td.appendChild(value)
        tr.appendChild(td)
    })

    tableBody.appendChild(tr)

})


