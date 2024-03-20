function Navegacao(){
  return <div className="navegacao">
      <input  type="radio" name="selecao" id="opcao-0" defaultChecked />
      <label htmlFor="opcao-0">Pratos Principais</label>
      <input  type="radio" name="selecao" id="opcao-1" />
      <label htmlFor="opcao-1">Sobremesas</label>
      <input  type="radio" name="selecao" id="opcao-2" />
      <label htmlFor="opcao-2">Bebidas</label>
  </div>
}

export default Navegacao;