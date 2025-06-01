import {create} from "zustand";

interface pokemonStore {
    id : number;
    setId : (input : number) => void;
}

export const usePokemonStore = create<pokemonStore>(set => {
    return {
        id : -1,
        setId : (input : number) => 
        {
            set({id : input})
        },
    };
})