const validator= require('validator')
const yargs= require('yargs')
const chalk = require('chalk')
//const add = require('./utils')
const fs = require('fs')
const notes = require('./notes')
const { argv } = require('process')
const { demandOption } = require('yargs')

//fs.writeFileSync('notes.txt', "This file was created by anand jha")
//fs.appendFileSync('notes.txt', ' I a learning')
//console.log(name) // it can not use the name since its scope is limited
//const sum= add(4,-2)
//console.log(sum)
//console.log(msg)
//console.log(validator.isEmail('jhaanand96@gmail.com'))
//console.log(chalk.red('Success'))


yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe : 'Notes title',
            demandOption : true,
            type: 'string'
        },
        body:{
            describe : 'Body of title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe: 'remove new note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
        console.log('removing notes')
    }
})

yargs.command({
    command : 'list',
    describe: ' list the note',
    handler() {
        notes.listNote()

    }
})

yargs.command({
    command : 'read',
    describe: ' read the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})



const command = process.argv[2]
console.log(yargs.argv)
if(command === 'add'){
    console.log('Adding note')
}
if( command ==='remove'){
    console.log('Removing note')
}