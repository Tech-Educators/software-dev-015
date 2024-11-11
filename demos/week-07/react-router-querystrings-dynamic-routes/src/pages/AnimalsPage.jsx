import { AnimalsList } from "../stores/Animals"
import { Link } from "react-router-dom"

export default function AnimalsPage() {
    return (
        <div>
            <h2>These are a bunch of cool animals</h2>
            <ol>
                {AnimalsList.map((animal) => (
                    <div key={animal.id} >
                        <br />
                        <Link to={`/animals/${animal.id}`}>{animal.name}</Link>
                    </div>
                ))}
            </ol>
        </div>
    )
}