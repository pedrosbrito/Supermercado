import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardLink from 'react-bootstrap/esm/CardLink';

const CardProduto = (props) => {
  return (
    <div>
     <Card style={{ width: '16rem', height: '32rem' }}>
    {/* imagem do card */}
      <Card.Img variant="top" src={props.imagemUrl} height="200px"/>

      <Card.Body>
{/* Título do card com nome do produto */}
        <Card.Title>{props.nome}</Card.Title>
{/* Subtitulo do card com o preço do produto */}
        <Card.Subtitle className="mb-2 text-muted">Preço: {props.preço}</Card.Subtitle>
        
        <Card.Text>
          Descriçao: {props.descricao}
        </Card.Text>

        <Card.Text>
            Categoria: {props.categoria}
        </Card.Text>
        <CardLink>
        <Button variant="warning">Editar</Button>
        </CardLink>
        <CardLink>
        <Button variant="danger">Excluir</Button>
        </CardLink>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProduto
