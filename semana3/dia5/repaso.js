//
const personas = ["victor","sandra", "maria", "carlos ", "roberto", "juan", "pedro", "carja", "naza" ,"edison", "marie", 
"jesus"]

console.log(personas.length)

const valores = ["maria"]
console.log(valores)
console.log(valores.length)


//console.log(valores[1])

const obtener = (lista) =>{
   lista[1] === undefined ? "error" : console.log(lista[1])
}
/*
obtener(valores)

console.log(valores[0])


let pasajeros = []

const recogerPasajeros = (nuevoValor) =>{
    pasajeros.push(nuevoValor)
}
recogerPasajeros("juan")
recogerPasajeros("maria")
recogerPasajeros("ana")
recogerPasajeros("silvia")

console.log(pasajeros)
*/

const saberSiEsParOInpar = (num1) => {
    return num1 % 2 === 0 ? "PAR" : "inpar"
}

console.log(saberSiEsParOInpar(valor = prompt("Ingrese un valor")))
