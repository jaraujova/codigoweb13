const btnPrueba = document.querySelector('#btn-prueba')
const btnPregunta = document.querySelector('#btn-pregunta')
const btnError = document.querySelector('#btn-error')
const btnWarning = document.querySelector('#btn-warning')
const btnInfo = document.querySelector('#btn-info')
const btnSuccess = document.querySelector('#btn-success')
const btnAlertaNotones = document.querySelector('#btn-alerta-botones')
const btnAlertaNotificacion = document.querySelector('#btn-alerta-notificacion')
const btnAlertaImagen = document.querySelector('#btn-alerta-imagen')
const btnAlertaCustom = document.querySelector('#btn-alerta-custom')

function showAlert (icon, title, text){
    Swal.fire({
        icon,
        title,
        text,
    })
}


btnPrueba.onclick = function (event){
    console.log("clic desde el boton")
    console.log(event)
    Swal.fire("hola mundo")
}


btnPregunta.onclick = function (){
    showAlert('Alguna Pregunta', 'aca el texto de la pregunta', 'question')
}

btnError.onclick = function (){
    showAlert('error','Hubo un error','error')
   
}

btnWarning.onclick = function(){
    Swal.fire({icon: "warning", title: "hay una alerta", text: "el peligro se acerca"})
}

btnInfo.onclick = function (){
    Swal.fire({
        icon: 'info', 
        title: 'Informacion', 
        text: 'importante',
    })
}

btnSuccess.onclick = function (){
    Swal.fire({
        icon: 'success', 
        title: 'existoso', 
        text: 'se logro',
    })
}


btnAlertaNotones.onclick =function(){
    Swal.fire({
        title: "Alerta",
        text: "texto de alerta",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "guardar",
        denyBottonText: "nel pastel",
    }).then((Resultado)=>{
    
        if(Resultado.isConfirmed){
            console.log("marco la confirmacion")
            showAlert('success','confirmado','se confirmo la operacion')
        }
        if(Resultado.isDenied){
            console.log("marca que no")
        }
        if(Resultado.isDismissed){
            console.log("marco cancelado")
        }
    })
}


btnAlertaNotificacion.onclick = function (){
    Swal.fire({
        position: "top-end", 
        icon: "success",
        title: "Notificacion",
        showConfirmButton: false,
        timer: 1500,
    })
}

btnAlertaImagen.onclick = function(){
    Swal.fire({
        title: "imagen",
        text: "alerta con imagen",
        imageUrl: "https://c.tenor.com/hV6p-P9fo_gAAAAC/dragon-ball-z-detente.gif",
        imageWidth: 300,
        imageHeight: 300,
    })
}



btnAlertaCustom.onclick = function(){
    Swal.fire({
        title: "Custom Alert",
        text: "Alerta custumisable",
        background: 'url(https://c.tenor.com/hV6p-P9fo_gAAAAC/dragon-ball-z-detente.gif)',
        color: "#fff",
        backdrop:  'rgba(0,0,0.3) url(https://media2.giphy.com/avatars/Bouletcorp/tHFgkIsBWXrF.gif) left top no-repeat',
    })
}

const btnAlertaInputs = document.querySelector('#btn-alerta-inputs')

btnAlertaInputs.onclick = function (){
    Swal.fire({
        title: "input para email",
        input: "email",
        inputLabel: "Ingrese su correo",
        inputPlaceholder: "El correo debe ser valido"
    }).then((resultado)=>{
        console.log(resultado.value)
    })
}



const paises = document.querySelector('#select-opciones')

paises.onchange = function (event){

    const {value, options} = event.target

    console.log("probamos el evento onchange", event.target.value)
    const index = options.selectedIndex
    console.log("index", index)
    console.log("texto", options[index].text)
}

