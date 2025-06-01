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

export default function Home({params} : {params: {id: string}}) {
    const id : number = parseInt(params.id, 10);

  return (
      <div className={"container" + notoSansKR.className } style={{userSelect: 'none'}}>
        <Header></Header>
        <PokemonDetail id={id}/>
      </div> 
  );
}