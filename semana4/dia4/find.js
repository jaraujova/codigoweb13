//* find

const edades =[10,11,22,32,50,34];
/*
const mayores30 = edades.find((edad)=>edad >30);
console.log(mayores30);
*/
const finder = edades.find((edad, index) => console.log(edad));


const laptops = [
  {
    marca: "Lenovo",
    imagen: "https://logo.com",
    nombre: "Ide Centre AIO I3",
    vendedor: "Falabella",
    precioOferta: 1599,
    precioNormal: 3599,
    calificacion: 2,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "integrada",
      discoDuro: "1TB",
      discoDuroSolido: "no aplica",
    },
  },
  {
    marca: "Acer",
    imagen: "https://logo.com",
    nombre: "AN515 15.6",
    vendedor: "Falabella",
    precioOferta: 3399,
    precioNormal: 4999,
    calificacion: 5,
    caracteristicas: {
      procesador: "i5",
      tarjetaDeVideo: "GTX 1650",
      discoDuro: "No tiene",
      discoDuroSolido: "256gb",
    },
  },
  {
    marca: "Acer 2",
    imagen: "https://logo.com",
    nombre: "AN515 15.6",
    vendedor: "Falabella",
    precioOferta: 3399,
    precioNormal: 4999,
    calificacion: 5,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "GTX 1650",
      discoDuro: "No tiene",
      discoDuroSolido: "256gb",
    },
  },
];

const laptopI3 = laptops.filter((laptop)=>laptop.caracteristicas.procesador === "i3");

console.log(laptopI3)

