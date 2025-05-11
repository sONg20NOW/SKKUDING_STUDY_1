import { Params, useParams } from "react-router-dom";
import { pokemon_type } from "../App";
import styles from "./PokemonDetail.module.css";

export default function PokemonDetail({data} : {data : Array<pokemon_type>}) {
    const p : Readonly<Params<string>> = useParams();
    const pokemon : pokemon_type = data[parseInt(p.id as string)];

    return (
        <div className={styles.main}>
                <img className={styles.img} src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + (p.id as string).padStart(4, "0")+"01.png"} alt="" />
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