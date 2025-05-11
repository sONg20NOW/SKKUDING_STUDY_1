import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import {usePokemonStore} from './store/usePokemonStore';

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

function App() {
  const id : number = usePokemonStore(store => store.id);
  const setId : ((input : number) => void) = usePokemonStore(store => store.setId);

  function clickHeader() {
    setId(-1);
  }

  return (
    <div className="container" style={{userSelect: 'none'}}>
      <nav>
        <h1 onClick={clickHeader}>
          <div>Pokemon List</div>
        </h1>
      </nav>
      {id === -1 ? <PokemonList/> : <PokemonDetail/>}
    </div> 
  );
}

export default App;
