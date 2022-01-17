import yargs from "yargs"
import { hideBin } from 'yargs/helpers'
import {removeNote, addNote, getNotes} from "./notes.js";

// const yargs = require('yargs')
// const notes = require('./notes.js')

yargs(hideBin(process.argv))
    // Create add command
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
    // Create remove command
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
    .parse()
