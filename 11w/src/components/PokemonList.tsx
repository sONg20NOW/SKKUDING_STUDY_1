import PokemonItem from "./PokemonItem";
import { pokemon_type } from "../App";
import { usePokemonStore } from "../store/usePokemonStore";


export default function PokemonList() {
    const pokemons : Array<pokemon_type> = usePokemonStore(store => store.pokemons);

    return (
        <main>
        <div id="card-wrapper">
            {pokemons.map((pokemon : pokemon_type, index : number) => {
                return (<PokemonItem key={index} pokemon={pokemon} index={index+1}/>)
            })}
        </div>
        </main>
    );
}