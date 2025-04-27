import { BrowserRouter, } from 'react-router-dom';
import './App.css';
import {data} from "./data";
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import { useState } from 'react';

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
  const [selectedPoketmon, setselectedPoketmon] = useState(-1);
  function clickHeader() {
    setselectedPoketmon(-1);
  }

  return (
    <BrowserRouter>
      <div className="container" style={{userSelect: 'none'}}>
        <nav>
          <h1 onClick={clickHeader}>
            <div>Pokemon List</div>
          </h1>
        </nav>
        {selectedPoketmon === -1 ? <PokemonList data={data} setselectedPoketmon={setselectedPoketmon}/> : <PokemonDetail pokemon={data[selectedPoketmon-1]} selectedPoketmon={selectedPoketmon}/>}
 
      </div>
    </BrowserRouter>
 
  );
}

export default App;
