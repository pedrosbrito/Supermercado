// importando componentes do bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

const NavBarra = () => {
  return (
    <div>
        <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
            

            {/* Icone Mercado */}
            <span 
            class="material-symbols-outlined" 
            style={{fontSize: "40px", color: "white"}}>
            store
            </span>

            {/* Texto Longo */}
          <Navbar.Brand href="/home"> Mercados</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="minha-nav" />
        <Navbar.Collapse id="minha-nav">
            {/* Páginas */}
          <Nav className="me-auto">
            <Nav.Link href="/home">Produtos</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
          </Nav>
          {/* Sair */}
          <Nav className="justify-content-end">
            <Nav.Link href="/Login">Sair</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarra
