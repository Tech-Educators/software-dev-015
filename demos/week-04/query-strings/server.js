import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/pokemons", (req, res)=>{
    console.log("I am the API route")

const allPokemons = [
    {
        name: "Pikachu",
        type: "Electric",
        color: "yellow",
    },
    {
        name: "Bulbasaur",
        type: "Grass",
        color: "green",
    },
    {
        name: "Charmander",
        type: "Fire",
        color: "red",
    },
    {
        name: "Squirtle",
        type: "Water",
        color: "yellow",
    },
    {
        name: "Jigglypuff",
        type: "Normal",
        color: "red",
    },
    {
        name: "Gengar",
        type: "Ghost",
        color: "yellow",
    },
    {
        name: "Mewtwo",
        type: "Psychic",
        color: "green",
    },
    {
        name: "Mew",
        type: "Psychic",
        color: "red",
    }
]
const pokemonColor = req.query.color;
console.log("Query color: ", pokemonColor)

if (pokemonColor){
    const filteredPokemons = allPokemons.filter((pokemon) => pokemon.color == pokemonColor);
    res.json(filteredPokemons);
    return;
}


 res.json(allPokemons);
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});
