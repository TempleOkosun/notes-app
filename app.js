// Required imports
//npm
import yargs from "yargs"
import {hideBin} from 'yargs/helpers'
//project
import {removeNote, addNote, listNotes, readNote} from "./notes.js";


yargs(hideBin(process.argv))
    // Add note command
    .command(
        {
            command: 'add',
            describe: 'Add a new note',
            builder: {
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'
                },
                body: {
                    describe: 'Note body',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler(argv) {
                addNote(argv.title, argv.body)
            }
        }
    )
    // Remove note command
    .command(
        {
            command: 'remove',
            describe: 'Remove a note',
            builder: {
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler(argv) {
                removeNote(argv.title)
            }
        }
    )
    // List notes command
    .command(
        {
            command: 'list',
            describe: 'list your notes',
            handler() {
                listNotes()
            }
        }
    )
    // Read note command
    .command(
        {
            command: 'read',
            describe: 'Read a note',
            builder: {
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler(argv) {
                readNote(argv.title)
            }
        }
    )
    .version("1.0.0")
    .parse()
