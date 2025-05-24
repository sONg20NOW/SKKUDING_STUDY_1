import { gql, useQuery } from "@apollo/client";
import { usePokemonStore } from "../store/usePokemonStore";
import styles from "./PokemonDetail.module.css";

interface Stat {
    'base_stat' : number,
    'pokemon_v2_stat' : {
        'name' : string
    }
};

const GET_POKEMON = gql`
query MyQuery($id1: Int_comparison_exp) {
  pokemon_v2_pokemon(order_by: {id: asc}, where: {id: $id1}) {
    name
    weight
    height
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    base_experience
    pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
      }
    }
    pokemon_v2_pokemonstats {
      base_stat
      pokemon_v2_stat {
        name
      }
    }
  }
}`;
function TableRow({name, value} : {name : string, value : string}) {
    return (
    <div className={`${styles.tr} ${name === 'speed' ? styles.last : ''}`} key={name}>
        <p className="title">
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
        <p className={`${styles.content}`}>
            {value}
        </p>
    </div>
    );
};

export default function PokemonDetail({pokemons} : {pokemons : any}) {

    const id : number = usePokemonStore(store => store.id);

    const {loading, error, data} = useQuery(GET_POKEMON, {variables : {"id1":{"_eq": id}}});

    if (loading) return <p>Loading...</p>;  
    if (error) return <p>Error : {error.toString()}</p>;

    const pokemon : object = data['pokemon_v2_pokemon'][0];

    return (
        <div className={styles.main}>
                <img className={styles.img} src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + String(id).padStart(4, "0")+"01.png"} alt="" />
                <div className={styles.table}>
                    {Object.entries(pokemon).map(([key, value]) => {
                        if (key === 'pokemon_v2_pokemontypes') {
                            const type_list = value.map((element: { pokemon_v2_type : { name : string; }}) => (element['pokemon_v2_type']['name']));
                            const types = type_list.join(', ');
                            return (<TableRow key='types' name="types" value={types}></TableRow>);
                        }
                        else if (key === 'pokemon_v2_pokemonabilities') {
                            const ability_list = value.map((element : { pokemon_v2_ability : { name : string}}) => (element['pokemon_v2_ability']['name']));
                            const abilities = ability_list.join(', ');
                            return (<TableRow key='abilities' name="abilities" value={abilities}></TableRow>);
                        }
                        else if (key === 'pokemon_v2_pokemonstats') {
                            const stats : Array<Stat> = value;
                            return (stats.map((element) => (<TableRow key={element['pokemon_v2_stat']['name']} name={element['pokemon_v2_stat']['name']} value={element['base_stat'].toString()}></TableRow>)))
                        }
                        if (key !== '__typename') {
                            return (
                                <TableRow key={key} name={key} value={value}></TableRow>
                            );
                        }
                        return (null);
                    })}
                </div>
        </div>
    );
}