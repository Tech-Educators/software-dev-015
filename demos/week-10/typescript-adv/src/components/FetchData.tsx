'use client'
import {useState, useEffect} from "react"

export type Books = {
    name: string,
    author: string
}

export default function FetchData() {

    // typescript moans because i started it in one data type, and then im changing it later
    const [data, setData] = useState<Books[] | null>(null)

    function fetchData() {
        setData([{name: 'Sam', author: 'Sam'}])
    }

    console.log(data)
    return (
        <div>

        </div>
    )
}