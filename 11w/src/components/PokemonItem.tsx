import { pokemon_type } from "../App";
import { usePokemonStore } from "../store/usePokemonStore";

export default function PokemonItem({pokemon, index} : {pokemon : pokemon_type, index : number}) {
    const setId : ((input : number) => void) = usePokemonStore(store => store.setId);

    function clickCard() {
        setId(index);
    }
    return (
            <div onClick={clickCard} className="card"  onDragStart={() => {return false;}}>
                <img alt="pokemon img" src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + (String(index) as string).padStart(4, "0")+"01.png"}></img>
                <div className="info-wrapper">
                    <h2>{pokemon.name}</h2>
                    {Object.entries(pokemon).filter(([key, value]) => (key === 'height') || (key === 'weight') || (key === 'types')).map(([key, value]) => (
                        <p key={key}>{key + ": " + value}</p>
                    ))}
                </div>
            </div>
    );
}