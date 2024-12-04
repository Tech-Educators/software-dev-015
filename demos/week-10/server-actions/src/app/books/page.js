import { connect } from "@/utils/connect"
import Link from "next/link"

export default async function Page() {
    const db = connect()

    const books = (await db.query(`SELECT * FROM books`)).rows

    // console.log(books)

    return (
        <div className="">
            <h2>all books</h2>
            <div className="">
                {books.map(book => (
                   <div>
                    <br/>
                    <Link href={`/books/${book.id}`}>{book.title}</Link>
                   </div>
                ))}
            </div>
        </div>
    )
}