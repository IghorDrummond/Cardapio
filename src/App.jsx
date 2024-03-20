import React from 'react';
import './App.css';
import restaurante from './assets/hashtaurante.webp';
import Navegacao from './navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

function App(){
  return (
    <>
  <header>
      <img src={restaurante} alt='Foto do Restaurante de Capa' className='capa' />
      <nav>
        <Navegacao />
      </nav>
  </header>
  <main>
      <div className='menu'>
        {pratosPrincipais.map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
      </div>
  </main>    
  </>);
}

export default App;
