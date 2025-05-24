import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import {usePokemonStore} from './store/usePokemonStore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
 uri: 'https://beta.pokeapi.co/graphql/v1beta',
 cache: new InMemoryCache()
});

function App() {
  const [pokemons, setPokemons] = useState<Array<object>>([]);

  useEffect(() => {
    async function fetchPokemons() {
      const results: any[] | ((prevState: object[]) => object[]) = [];
      for (let id = 1; id < 11; id++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        try {
          results.push(response.data);
        } catch (error) {
          throw new Error("pokemons error!");
        }
      }
      setPokemons(results);
    }

    fetchPokemons();
  }, []);

  const id : number = usePokemonStore(store => store.id);
  const setId : ((input : number) => void) = usePokemonStore(store => store.setId);

  function clickHeader() {
    setId(-1);
  }

  return (
    <ApolloProvider client={client}>
      <div className="container" style={{userSelect: 'none'}}>
        <nav>
          <h1 onClick={clickHeader}>
            <div>Pokemon List</div>
          </h1>
        </nav>
        {id === -1 ? <PokemonList pokemons={pokemons}/> : <PokemonDetail pokemons={pokemons}/>}
      </div> 
    </ApolloProvider>
  );
}

export default App;
