const carro = {
    color: "azul",
    motor: 1.2,
    modelo: "GTR",
    marca: "Nissan",
    nuevo: true,
}

console.log(carro.modelo)

carro.aros= "metal"
console.log(carro)

const celular = {
    model: "iPhone11",
    flexible: false,
    tamaño: 6.1,
    gama: "Alta",
    color: "Gris",
    camara: 2,
    precio: "$ 700",
}

celular.model = "IphoneX"
celular.model = "128 gb"

console.log(celular.model)

const usuario = {
    nickName: "jefersson",
    email: "jeff@gmail.com",
    password: "******",
    CarnetVacunacion: true,
    location: "Peru",
    level: "pro",
    edad: 18
}

const validarUsuario = (validar) =>{
    const{nickName, location, level} = validar;
    return location === "Peru" ? `${nickName} tu lvl ${level}` : "Oye tu nickname no es de Peru";
}

Object.log(validarUsuario(usuario))