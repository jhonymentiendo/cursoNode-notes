const fs = require('fs')
const chalk = require('chalk')
const {nombreRepo} = require('./utils.js')


const readNotes = (title)=>{
    let notas = loadNotes();

    let notaresp = notas.find((nota) => title===nota.titulo)

    if(notaresp){
        console.log(chalk.green.inverse.bold('Nota Encontrada'));
    }else{
        console.log(chalk.red.inverse.bold('Nota NO Encontrada'));
    }
    return notaresp;
}


const addNotes = (title ,body)=>{
    let notas = loadNotes();
    let notasduṕlicadas = notas.find((nota)=>title ===nota.titulo);

    debugger
    
    if(!notasduṕlicadas){
        let nota = {}
    nota.titulo = title;
    nota.cuerpo = body;
    notas.push(nota)
    saveNotes(notas);
    console.log(chalk.green.inverse.bold('Nota Agragada'));
    }else{
    console.log(chalk.red.inverse.bold('Nota NO Agragada'));
    }

}

const saveNotes = (notas) =>{
    let dataJSON = JSON.stringify(notas)
    fs.writeFileSync(nombreRepo,dataJSON)
}

const removeNote = (title) =>{
    let notas = loadNotes();
    let notasConservar = notas.filter((nota)=>title !== nota.titulo);
    console.log('notasConservar : ',notasConservar)
    if(notasConservar.length === 0){
        console.log(chalk.red.inverse.bold('Nota no encontrada:')+' '+ title)
    }else{    
        console.log(chalk.green.inverse.bold('removiendo Nota :')+' '+ title)
    }
    saveNotes(notasConservar);
}


const loadNotes = () =>{
    try {
        let buffer = fs.readFileSync(nombreRepo)
        let dataJSON = buffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    addNotes:addNotes,
    loadNotes:loadNotes,
    removeNote:removeNote,
    readNotes:readNotes
};