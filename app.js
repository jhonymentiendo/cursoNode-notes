const yargs = require('yargs')
const chalk = require('chalk')
const validator = require('validator')
const add = require('./utils.js')
const notes = require('./notes.js')
//const {getNotes,addNotes} = require('./notes.js')

//console.log('nombre: ' + name)
//console.log('suma:' + add(100,100))
//console.log(getnotes())
//console.log((validator.isEmail('juan@carlos.com')?"si es":"no es") + " email" )
//console.log((validator.isURL('2345434')?"si es":"no es") + " URL" )
//console.log(chalk.green.inverse.bold('Hello world!'));
//console.log(process.argv[2])
//console.log(process.argv[3])
//console.log(process.argv);
//console.log(yargs.argv);
//console.log(yargs.argv['titulo']);

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',

    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        console.log('titulo:' + argv.title)
        console.log('body:' + argv.body)
        notes.addNotes(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Nota a remover',
            demandOption:true,
            type:'string'
        }

    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log(chalk.yellow.inverse.bold('Notas:'));
        //console.log(notes.loadNotes())
        notes.loadNotes().forEach(nota => {
            console.log(nota)
        });


    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
        describe:'title',
        demandOption:true,
        type:'string'
        }
    },
    handler: function (argv) {
        console.log(notes.readNotes(argv.title))
    }
})

console.log(yargs.argv)