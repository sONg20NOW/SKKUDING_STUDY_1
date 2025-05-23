import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {data} from "./data";
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

export const default_path : string = '/SKKUDING_STUDY_1/8w_router/build'

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
  console.log(default_path + "/");
  return (
    <BrowserRouter>
      <div className="container" style={{userSelect: 'none'}}>
        <nav>
          <Link to={default_path + "/"} className='header'>
            <div>Pokemon List</div>
          </Link>
        </nav>
        <Routes>
          <Route path={default_path + '/detail/:id'} element={<PokemonDetail data={data} />} />
          <Route path={default_path + '/'} element={<PokemonList data={data}/>} ></Route>
          <Route path='*' element={<PokemonList data={data}/>} ></Route>
        </Routes>
 
      </div>
    </BrowserRouter>
 
  );
}

export default App;
