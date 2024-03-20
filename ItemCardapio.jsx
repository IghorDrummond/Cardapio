function ItemCardapio(props) {
  return (
      <div className="container-item-cardapio">
        <div className="informacoes-item-cardapio">
          <h2>{props.nome}</h2>
          <p>{props.descricao}</p>
          <p>{props.preco}</p>
        </div>
        <img src={props.imagem} className="imagem-item-cardapio" />
      </div>
  );
}
export default ItemCardapio;
