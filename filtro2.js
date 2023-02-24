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

//Filtrar los estudiantes que son hinchas del Medellin

estudiantes.filter(function(estudiante){
    return estudiante.Equipo=="Medellin"
})
console.log(filtro)