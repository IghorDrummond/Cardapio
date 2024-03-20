//Importador
import { useState } from 'react';
import './App.css';
import restaurante from './assets/hashtaurante.webp';
import Navegacao from './navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

function App(){
  var paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  var [Select, PaginaSelec] = useState(0);

  return (
    <>
  <header>
      <img src={restaurante} alt='Foto do Restaurante de Capa' className='capa' />
      <nav>
        <Navegacao PaginaSelec={PaginaSelec} />
      </nav>
  </header>
  <main>
      <div className='menu'>
        {paginasMenu[Select].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
      </div>
  </main>    
  </>);
}

export default App;
