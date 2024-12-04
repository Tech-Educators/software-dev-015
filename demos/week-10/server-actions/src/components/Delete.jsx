// 'use client'
import { deleteBook } from "@/utils/actions"

export default function DeleteButton({children, bookId}) {
    return (
        <button onClick={() => {
            deleteBook(bookId)
        }}>
            {children}
        </button>
    )
}