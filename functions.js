
console.log ("functions.js")    // Lo uso para saber si el archivo html está conectado correctamente al .js

document.getElementById('boton').onclick = function (){
    console.log("Capturamos Click")
    document.getElementById("demo").innerHTML = "Probando botoncito"
}