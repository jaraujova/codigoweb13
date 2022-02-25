/*

document.write("hola mundo")
document.write("hola mundo2")
document.write("hola mundo3")


const inputs = document.querySelectorAll("inputs")


const containerList = document.querySelector("#container-list")
const ul = document.createElement("ul")
ul.className = "lista"
const li1 = document.createElement("li")
const contenido = document.createTextNode("BMW")
li1.appendChild(contenido)
console.log(li1)
ul.appendChild(li1)
console.log(ul)
containerList.appendChild(ul)

*/

const inputs = Array.from(document.querySelectorAll("input"))
console.log(inputs)

const contenedor = document.querySelector("#container-list")

const ul = document.createElement("ul")

inputs.map((input)=>{
    const li = document.createElement("li")
    const elementText = document.createTextNode(input.value)
    li.appendChild(elementText);
    ul.appendChild(li);
})
   contenedor.appendChild(ul); 

   const body = document.body;

   body.style.backgroundColor = "yellow"
   body.style.fontFamily = "Helvetica";


   
   Document.title = "Julio";


