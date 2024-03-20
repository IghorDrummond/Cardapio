function Navegacao(props){
  return <div className="navegacao">
      <input  type="radio" name="selecao" id="opcao-0" defaultChecked onClick={() => PaginaSelec(0)}/>
      <label htmlFor="opcao-0">Pratos Principais</label>
      <input  type="radio" name="selecao" id="opcao-1" onClick={() => PaginaSelec(1)}/>
      <label htmlFor="opcao-1">Sobremesas</label>
      <input  type="radio" name="selecao" id="opcao-2" onClick={() => PaginaSelec(2)}/>
      <label htmlFor="opcao-2">Bebidas</label>
  </div>
}

export default Navegacao;
