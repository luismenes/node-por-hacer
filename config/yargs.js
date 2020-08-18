const descripcion = {
    //obligatorio
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {

    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')



.command('crear', 'Genera un Elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estadocompletado de una tarea', {
        descripcion,
        completado
    })

.command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}