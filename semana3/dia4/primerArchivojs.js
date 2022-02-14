const numero1 = 10;
const numero2 = 20;

let resultado = 0;
resultado = numero1 + numero2;

console.log("Resultado :" + numero1 + "+" + numero2 + "=" + resultado )
console.log("Resultado", resultado);
console.log("Hola mundo")
console.error(resultado)
console.error("codiGO")
console.error(302)

resultado= numero1 - numero2
console.warn(resultado)

//calculadora con JS
//Restricciones debemos validar la divicion entre / 0
//prompt:
/*
const valor1 = prompt("Ingrese un valor1")
const valor2 = prompt("Ingrese un valor2")



const operacion = prompt("Ingrese una operacion -> + - * /")

let resultadocalculadora = 0

if (operacion === "+"){
    resultadocalculadora = +valor1 + +valor2;
    console.log(resultadocalculadora)
}else if (operacion === "-"){
    resultadocalculadora = +valor1 - +valor2;
    console.log(resultadocalculadora)
}else if (operacion === "*"){
    resultadocalculadora = +valor1 * +valor2;
    console.log(resultadocalculadora)
}else if (operacion === "/"){
    if(+valor2 !== 0){
        resultadocalculadora = +valor1 / +valor2;
        console.log(resultadocalculadora)
    }else{
        console.log("el divisor debe ser distinto a 0")
    }
}else{
    console.error("Operacion invalida")
}
*/

const valor1 = +prompt("Ingrese un valor1")
const valor2 = +prompt("Ingrese un valor2")
const valor3 = +prompt("Ingrese un valor3")

let valor = ("EL NUMERO " + valor3 + "ES EL MAYOR" )

if(valor1 > valor2 && valor1 > valor3) {
    console.log("EL NUMERO " + valor1 + " ES EL MAYOR" )
}else if(valor2 > valor1 && valor2 > valor3){
    console.log("EL NUMERO " + valor2 + " ES EL MAYOR" )
}
