let estudiantes=[
    {
        id:1,
        nombre:"Juan",
        Equipo:"Nacional"
    },
    {
        id:2,
        nombre:"Francia",
        Equipo:"Medellin"   
    },
    {
        id:3,
        nombre:"Ana",
        Equipo:"Medellin"
    }
]

//nombre del arreglo.lafuncion estudiante.find

let buscador=estudiantes.find(function(estudiante){
    return estudiante.id==3
})
let filtro=estudiantes.filter(function(estudiante){
    return estudiante.id==3
})
let busqueda=estudiantes.some(function(estudiante){
    return estudiante.id==3
})
console.log(buscador)
console.log(filtro)
console.log(busqueda)