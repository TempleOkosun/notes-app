const fs = require('fs')

const getNotes = () => {
    return `Your notes...`
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(title => notes.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({title: title, body: body})
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title already exist!')
    }


}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('note.json', dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }


}


module.exports = {
    getNotes: getNotes,
    addNote: addNote
}