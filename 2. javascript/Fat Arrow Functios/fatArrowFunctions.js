var hola = function() {
    console.log("Hola Mundo")
}

hola()

var hola2 = ()=>{ return "Hola2" }

hola2()

var hola3 = ()=>  hola2()

hola3()

var holaMundo3 = (nombre)=> `Hola: ${nombre}`
holaMundo3("das")


var holaMundo4 = apellido => `${apellido}`
holaMundo4("gfdsrewqfasfsda")

var holaMundo4 = (nombre, apellido) => `Hola: ${nombre} ${apellido}`
holaMundo4("Carlos", "Sampedro")