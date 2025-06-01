import styles from "./PokemonDetail.module.css";
import pokemons from "../public/data.json";
import Image from "next/image";

export interface pokemon_type {
  name: string,
  height: string,
  weight: string,
  types: Array<string>,
  'base-Experience': string,
  abilities: Array<string>,
  hp: string,
  attack: string,
  defense: string,
  'special-attack': string,
  'special-defense': string,
  speed: string,
};

export default function PokemonDetail({id} : {id: number}) {
    const pokemon : pokemon_type = pokemons[id - 1];

    return (
        <div className={styles.main}>
                <Image className={styles.img} src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + String(id).padStart(4, "0")+"01.png"} alt="" width={400} height={400}/>
                <div className={styles.table}>
                    {Object.entries(pokemon).map(([key, value]) => {

                        return (
                        <div className={`${styles.tr} ${key === 'speed' ? styles.last : ''}`} key={key}>
                            <p className="title font-bold">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </p>
                            <p className={`${styles.content} font-normal`}>
                                {value + ''}
                            </p>
                        </div>);
                    })}
                </div>
        </div>
    );
}