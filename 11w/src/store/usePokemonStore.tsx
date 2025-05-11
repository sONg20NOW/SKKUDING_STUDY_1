import {create} from "zustand";
import {data} from "../data";
import {pokemon_type} from "../App"

interface pokemonStore {
    id : number;
    pokemons : Array<pokemon_type>;
    setId : (input : number) => void;
}

export const usePokemonStore = create<pokemonStore>(set => {
    return {
        id : -1,
        pokemons : data,
        setId : (input : number) => 
        {
            set({id : input})
        },
    };
})