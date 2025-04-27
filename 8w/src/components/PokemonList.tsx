import PokemonItem from "./PokemonItem";
import { pokemon_type } from "../App";


export default function PokemonList({data, setselectedPoketmon} : {data : Array<pokemon_type>, setselectedPoketmon : React.Dispatch<React.SetStateAction<number>>}) {


    return (
        <main>
        <div id="card-wrapper">
            {data.map((pokemon : pokemon_type, index : number) => {
                return (<PokemonItem key={index} pokemon={pokemon} index={index+1} setselectedPoketmon={setselectedPoketmon}/>)
            })}
        </div>
        </main>
    );
}