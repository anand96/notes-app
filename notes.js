const chalk = require('chalk')
const fs= require('fs')

const getnotes = () =>  {
    return 'Your notes is ...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    //const duplicatesNotes = notes.filter(function (note){
       // return note.title ===title
    //})

    const duplicatesNote = notes.filter((note) => note.title === title )

    const duplicatesNotes = notes.filter((note) => note.title ===  title)

    console.log(duplicatesNote)

    if(duplicatesNote.length ===0)
    {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New Note add")
    }
    else{
        console.log("Title already taken")
    }
}

const removeNote = (title) => {
    console.log(title)
    const notes =loadNotes()

    const notesToKeep = notes.filter((note) => note.title !==title)

    if(notesToKeep.length < notes.length)
    {
        console.log(chalk.green.inverse('remove'))
        saveNotes(notesToKeep)
    }
    else
    {
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) =>{
        console.log(note.title)
    })

}


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON) 
    
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}


module.exports = {
    getnotes: getnotes,
    addNote :addNote,
    removeNote :removeNote,
    listNote :listNote,
    readNote : readNote
}