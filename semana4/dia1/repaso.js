const nombreNumber = +"nombre"
console.log("tipo de variable", typeof nombreNumber)

let alumnos = ["luis", "Karen", "pedro", "maria"]
let notas = [20, 16,18,15]
let juegos = ["domino", "sapito", "cuerda", "starcraft"]

console.log(`${alumnos[0]} tiene ${notas[0]} de nota y juega ${juegos[3]}`)

const cuadrado = (num1, num2) => {
    const Cuadrado1 = Math.pow(num1,2)
    const Cuadrado2 = Math.pow(num2,2)
    return `El cuadrado del primer numero es: ${Cuadrado1} y el cuadrado del segundo numero es: ${Cuadrado2}`

}
console.log(cuadrado("",20))

const mesnajeSaludo = (nombre, apellido, edad) => {
    
    return `Hola, ${nombre} ${apellido} de ${edad} años de edad`
}

console.log(mesnajeSaludo())


const areaRectangulo = (base, altura) => `El area del rectangulo es: ${+base * +altura}`

console.log(areaRectangulo(2,3))

const esMayor = edad => {

    return edad >= 18 ? "es mayor": "es menor"
}

console.log(esMayor(12));

const retornarArreglo = (datoss) =>{
    return datoss.length < 5 ? "arreglo grande" + datoss.length : "arreglo pequeño" + datoss.length;
    console.log(datoss.length)
}

console.log(retornarArreglo("a","b","a","b","a","b"))
