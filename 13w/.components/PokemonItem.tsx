'use client';
import { useRouter } from 'next/navigation';
import { usePokemonStore } from "../.store/usePokemonStore";
import Image from "next/image";

function DefaultP({name, value} : {name : string, value : string}) {
    return (<p className="font-normal" key={name}>{name + ": " + value}</p>);
}

export default function PokemonItem({pokemon, index} : {pokemon : any, index : number}) {
    const router = useRouter();
    function clickCard() {
        router.push('/detail/' + index);
    }
    return (
            <div onClick={clickCard} className="card"  onDragStart={() => {return false;}}>
                <Image alt="pokemon img" src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + (String(index) as string).padStart(4, "0")+"01.png"} width={100} height={100}/>
                <div className="info-wrapper">
                    <h2 className="font-bold">{pokemon.name}</h2>
                    <DefaultP name='height' value={pokemon.height}></DefaultP>
                    <DefaultP name='weight' value={pokemon.weight}></DefaultP>
                    <DefaultP name='types' value={pokemon.types.map((element: any) => (element['type']['name'])).join(', ')}></DefaultP>
                </div>
            </div>
    );
}