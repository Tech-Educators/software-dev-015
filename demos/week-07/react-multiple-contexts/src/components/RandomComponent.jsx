import { useRef } from "react"
export default function RandomComponent() {
    console.log('Rerendering...')
    const rerenders = useRef(0)

    rerenders.current++;
    alert('renrendered ' + rerenders.current)
    return (
        <div>
            <h2>I'm a random component</h2>
        </div>
    )
}