import { usePokemonStore } from "../store/usePokemonStore";

function DefaultP({name, value} : {name : string, value : string}) {
    return (<p key={name}>{name + ": " + value}</p>);
}

export default function PokemonItem({pokemon, index} : {pokemon : any, index : number}) {
    const setId : ((input : number) => void) = usePokemonStore(store => store.setId);

    function clickCard() {
        setId(index);
    }
    return (
            <div onClick={clickCard} className="card"  onDragStart={() => {return false;}}>
                <img alt="pokemon img" src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + (String(index) as string).padStart(4, "0")+"01.png"}></img>
                <div className="info-wrapper">
                    <h2>{pokemon.name}</h2>
                    <DefaultP name='height' value={pokemon.height}></DefaultP>
                    <DefaultP name='weight' value={pokemon.weight}></DefaultP>
                    <DefaultP name='types' value={pokemon.types.map((element: any) => (element['type']['name'])).join(', ')}></DefaultP>
                </div>
            </div>
    );
}