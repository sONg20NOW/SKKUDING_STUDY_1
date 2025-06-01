import '../../globals.css';
import '../../index.css';
import '../../App.css';
import Header from '../../../.components/Header';
import PokemonDetail from '../../../.components/PokemonDetail';
import { Noto_Sans_KR } from 'next/font/google';
import React from 'react';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'], 
  subsets: [], 
})

export default function Home(props : any) {
  const id = props.params.id;

  return (
      <div className={"container " + notoSansKR.className } style={{userSelect: 'none'}}>
        <Header></Header>
        <PokemonDetail id={parseInt(id, 10)}/>
      </div> 
  );
}