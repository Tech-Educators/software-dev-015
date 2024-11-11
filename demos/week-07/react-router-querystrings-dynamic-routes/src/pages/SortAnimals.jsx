import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SortAnimals() {

    const animals = [
        "Pigeon",
        "Frog",
        "Cat",
        "Honeybadger",
        "Monkey",
        "Panda",
        "Elephant",
        "Dog",
        "Lion",
        "Tiger",
        "Eagle",
        "Guinea Pig",
        "Possum",
      ];

      const [params] = useSearchParams()
      const sort = params.get('sortBy')

      console.log(sort)


      if (sort === 'asc') {
        // works well on most strigs. uses Tim sort
        animals.sort()
      } else if (sort == 'desc') {
        animals.sort().reverse()
      }

    return (
        <div>
            <p>sort my animals</p>

            <Link to={`/sort-animals`}>don't sort</Link>
            <Link to={`/sort-animals?sortBy=asc`}>sort by asc</Link>
            <Link to={`/sort-animals?sortBy=desc`}>sort by desc</Link>

            <ol>
                {animals.map(animal => (
                    <li key={animal}>{animal}</li>
                ))}
            </ol>
        </div>
    )
}