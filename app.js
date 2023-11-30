const readlineSync = require("readline-sync");

const {mostrarListaEstudiantes} = require("./list_estudiantes")

const registrarEstudiantes= () =>
{
    console.log("inicio de regidtro de estudiantes")
    
    let cantidadEstudiantes= readlineSync.question("ingrese la cantida de alumnos a registrar: ")
    console.log("cantidad de estudiantes a registrar: " + cantidadEstudiantes)
    
    let estudiantes= [];
    
    for(let i = 0; i < cantidadEstudiantes; i++)
    {
        let nombreEstudiante= readlineSync.question("Ingrese el nombre del estudiante: ")
        let edadEstudiante= readlineSync.question("Ingrese la edad del estudiante " + nombreEstudiante + ": ")
        
        let estudiante= 
        {
            nombre: nombreEstudiante,
            edad: edadEstudiante
        }

        estudiantes.push(estudiante)
    }
    return estudiantes;
}


//Ejecutando la funcion
let estudiantesRegistrados= registrarEstudiantes();

mostrarListaEstudiantes(estudiantesRegistrados);