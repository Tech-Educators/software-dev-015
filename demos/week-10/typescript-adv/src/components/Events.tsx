'use client'
import {useState} from "react"

export default function AllEventsTypes() {
    const [count, setCount] = useState(0)

    // how to type a click event React.[event]<HTMLElement>
    function handleClick(sdfasefrae: React.MouseEvent<HTMLButtonElement>) {
        console.log(sdfasefrae)
        setCount(count + 1)
    }

    // change event
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)

    }

    // submit event
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click me to change count</button>
            <input onChange={handleChange}></input>

            <form onSubmit={handleSubmit}>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}