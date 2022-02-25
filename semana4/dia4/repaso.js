const mascotas = [
    {nombre: "pulga", edad: 2},
    {nombre: "perro", edad: 5},
    {nombre: "gato", edad: 8},
    {nombre: "raton", edad: 3},
    {nombre: "loro", edad: 12},
]

/*
const mascotaSumarEdad = mascotas.map((mascota) =>{
    return{
        nombre: mascota.nombre,
        edad: mascota.edad + 2,
    }
})

console.log(mascotaSumarEdad)

*/

const mascotasMayores = mascotas.filter((mascota)=>mascota.edad>5);
console.log("mascotas Mayores", mascotasMayores)

const mascotaEdadPar = mascotas.filter((mascota) =>mascota.edad % 2 ===0);
console.log("Mascotas Pares :", mascotaEdadPar)

const mascotaInPar = mascotas.filter((mascota, index) => mascota.edad % 2 !== 0);
console.log("MAscotas Inpares :", mascotaInPar)

/*
const mascotaMasLetras = mascotas.filter((mascotas)=> length.mascota.nombre > 3);
console.log
*/

const arregloCursos = [
    {
      nombre: "React JS",
      tec: "JS",
    },
    {
      nombre: "django",
      tec: "Python",
    },
    {
      nombre: "Angular",
      tec: "JS",
    },
    {
      nombre: "Flask",
      tec: "Python",
    },
    {
      nombre: "Laravel",
      tec: "PHP",
    },
  ];

  arregloCursos.filter((curso)=> {
      curso.nombre === "React JS" || "Flask" ||"Laravel"    
    });
