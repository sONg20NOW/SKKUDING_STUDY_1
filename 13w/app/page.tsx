'use client';

import './globals.css';
import './index.css';
import './App.css';
import { usePokemonStore } from '../.store/usePokemonStore';
import PokemonList from '../.components/PokemonList';
import PokemonDetail from '../.components/PokemonDetail';
import Header from '../.components/Header';

import { useEffect, useState } from 'react';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'], 
  subsets: [], 
})

export default function Home() {


  const id : number = usePokemonStore(store => store.id);
  const setId : ((input : number) => void) = usePokemonStore(store => store.setId);



  return (
      <div className={"container" + notoSansKR.className } style={{userSelect: 'none'}}>
        <Header></Header>
        <PokemonList/>
      </div> 
  );
}
