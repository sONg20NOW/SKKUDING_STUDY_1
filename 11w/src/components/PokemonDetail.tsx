import { pokemon_type } from "../App";
import { usePokemonStore } from "../store/usePokemonStore";
import styles from "./PokemonDetail.module.css";

export default function PokemonDetail() {
    const id : number = usePokemonStore(store => store.id);
    const pokemons : Array<pokemon_type> = usePokemonStore(store => store.pokemons);
    const pokemon : pokemon_type = pokemons[id - 1];

    return (
        <div className={styles.main}>
                <img className={styles.img} src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + String(id).padStart(4, "0")+"01.png"} alt="" />
                <div className={styles.table}>
                    {Object.entries(pokemon).map(([key, value]) => {

                        return (
                        <div className={`${styles.tr} ${key === 'speed' ? styles.last : ''}`} key={key}>
                            <p className="title">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </p>
                            <p className={`${styles.content}`}>
                                {value + ''}
                            </p>
                        </div>);
                    })}
                </div>
        </div>
    );
}