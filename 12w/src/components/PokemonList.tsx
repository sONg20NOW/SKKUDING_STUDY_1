import PokemonItem from "./PokemonItem";


export default function PokemonList({pokemons} : {pokemons : any}) {

    return (
        <main>
        <div id="card-wrapper">
            {pokemons.map((pokemon : any, index : number) => {
                return (<PokemonItem key={index} pokemon={pokemon} index={index+1}/>)
            })}
        </div>
        </main>
    );
}