import { useParams, Outlet } from "react-router-dom"
import { findAnimal } from "../stores/Animals"

export default function IndividaulAnimalPage() {
    // allows us to read the value of the dynamic route
    const {id} = useParams()

    const animalInfo = findAnimal(id)

    // console.log(typeof id)

    return (
        <div>
            <h2>Single animal page!</h2>
            <Outlet />
            <h2>{animalInfo.name}</h2>
            <img src={animalInfo.img} />
            <br />
            <p>{animalInfo.description}</p>
        </div>
    )
}