'use server'

import { connect } from "./connect"

// i use this file to store commont db actions i'll need to do.

export async function singleBookData(bookId) {
    const db = connect()
    try {
        const res = (await db.query(`SELECT * FROM books WHERE id = $1`, [bookId])).rows[0]
        return res
    } catch (e) {
        throw new Error(e.message)
    }
}

// write a functino that accept a bookID as the parameter, and runs a sql query to delete it 

export async function deleteBook(bookId) {
    const db = connect() 
    try {
        await db.query(`DELETE FROM books WHERE id = $1`, [bookId])
    } catch (e) {
        throw new Error(e.message)
    }
    // do stuff in here
}