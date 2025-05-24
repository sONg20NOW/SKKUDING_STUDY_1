import styles from "./PokemonDetail.module.css";

export default function TableRow({name, value} : {name : string, value : string}) {
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