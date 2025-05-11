import { Link } from "react-router-dom";
import { pokemon_type } from "../App";

export default function PokemonItem({pokemon, index} : {pokemon : pokemon_type, index : number}) {

    return (
        <Link to={`/detail/${index}`}>
            <div className="card"  onDragStart={() => {return false;}}>
                <img alt="pokemon img" src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + (String(index) as string).padStart(4, "0")+"01.png"}></img>
                <div className="info-wrapper">
                    <h2>{pokemon.name}</h2>
                    {Object.entries(pokemon).filter(([key, value]) => (key === 'height') || (key === 'weight') || (key === 'types')).map(([key, value]) => (
                        <p key={key}>{key + ": " + value}</p>
                    ))}
                </div>
            </div>
        </Link>
    );
}