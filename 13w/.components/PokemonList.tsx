'use client';
import { useRouter } from 'next/navigation';
import PokemonItem from "./PokemonItem";
import { useEffect, useState } from 'react';
import { Noto_Sans_KR } from 'next/font/google';


export default function PokemonList() {
    const [pokemons, setPokemons] = useState<Array<object>>([]);

  useEffect(() => {
    async function fetchPokemons() {
      const results: any[] | ((prevState: object[]) => object[]) = [];
      for (let id = 1; id < 11; id++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        try {
          const data = await response.json();
          results.push(data);
        } catch (error) {
          throw new Error("pokemons error!");
        }
      }
      setPokemons(results);
    }

    fetchPokemons();
  }, []);

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