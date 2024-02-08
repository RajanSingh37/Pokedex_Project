import { useEffect, useState } from "react";
import axios from "axios";
import'./PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";
function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'; // this downloads list of 20 pokemons
    async function downloadPokemons() {
        const response = await axios.get(POKEDEX_URL); // we get array of pokemons from result
        const pokemonResults = response.data.results;
        console.log(response.data);

        //iterating over the array of pokemons, and using their url, to create an array of promises
        // that will downloads those 20 pokemons
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data
        console.log(pokemonData);

        // now iterate on the data of each pokemon, and extract id, name, image, types

        const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        });
        console.log(pokeListResult);
        setPokemonList(pokeListResult);
        setIsLoading(false);
    }

useEffect(() => {
    downloadPokemons();
}, []);

    return (
        <div className= "pokemon-list-wrapper">
            <div className="pokemon-wrapper">
            {(isLoading) ? 'Loading....' :
            pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)
            }
            </div>
            <div className='controls'>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;