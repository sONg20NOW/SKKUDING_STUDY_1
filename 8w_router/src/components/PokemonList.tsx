import PokemonItem from "./PokemonItem";
import { pokemon_type } from "../App";


export default function PokemonList({data} : {data : Array<pokemon_type>}) {


    return (
        <main>
        <div id="card-wrapper">
            {data.map((pokemon : pokemon_type, index : number) => {
                return (<PokemonItem key={index} pokemon={pokemon} index={index+1}/>)
            })}
        </div>
        </main>
    );
}