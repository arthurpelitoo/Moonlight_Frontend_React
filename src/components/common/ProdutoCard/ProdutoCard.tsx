function ProdutoCard() {
  const nome = "Escultura 3D de Dragão";
  const preco = 199.90;

  return (
    <div>
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
      <button>Ver detalhes</button>
    </div>
  );
}

export default ProdutoCard;