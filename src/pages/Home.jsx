import React from "react";
import CardProduto from "../components/CardProduto";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "Shampoo Cr7",
      descricao: "Melhor shampoo do mundo",
      preco: 7.77,
      categoria: "Saúde e Beleza",
      ImagemUrl:
        "https://drogariaspacheco.vteximg.com.br/arquivos/ids/1161165-1000-1000/329150---shampoo-clear-controle-da-coceira-400ml-4.jpg?v=638312683120900000",
    },
    {
      id: 2,
      nome: "mikaza",
      descricao: "bola de futevoley",
      preco: 402.20,
      categoria: "esportes",
      ImagemUrl:
        "https://th.bing.com/th/id/OIP.zCgshxbNg8N670K_C512pgHaHa?rs=1&pid=ImgDetMain",
      },
      {
      id: 3,
      nome: "Tenis nike Air Max",
      descricao: "Tenis casual",
      preco: 1329.90,
      categoria: "Calçados",
      ImagemUrl:
        "https://i5.walmartimages.com/asr/f02e247b-12d6-4ed7-a5fa-45fcdec6bdf1.d4801b402256f77ff1b0326b60cab241.jpeg",
    },
  ];
  return (
    <div>
      <h2> Lista de Produtos </h2>
      <Container>
      <div className="ListadeProdutos" style={{display:"inline-flex"}}>
        {/* Card com informações fixas */}
        {/* <CardProduto
          id="1"
          nome="Shampoo Cr7"
          descricao="melhor shampoo do mundo"
          preço="7,77"
          categoria="Saúde e Beleza"
          imagemUrl="https://drogariaspacheco.vteximg.com.br/arquivos/ids/1161165-1000-1000/329150---shampoo-clear-controle-da-coceira-400ml-4.jpg?v=638312683120900000"
        /> */}
        {produtos.map((prod)=>
          <CardProduto 
          key={prod.id}
          id={prod.id}
          nome={prod.nome}
          descricao={prod.descricao}
          preco={prod.preco}
          categoria={prod.categoria}
          imagemUrl={prod.ImagemUrl}
          />
        )}
      </div>
      </Container>
    </div>
  );
};

export default Home;
