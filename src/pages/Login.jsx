import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <div>
      <Container style={{background:"blue", height:"100vh"}} className="justify-content-center align-content-center">
        {/* Icone de Login */}
      <h1 style={{marginTop:"20px", color:"white"}}> Login </h1> 

      <span style={{fontSize:"35px", color:"white"}} className="material-symbols-outlined">login</span>

        {/*Caixinha de Email*/}
        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        
        {/*Caixinha de Senha*/}
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        {/* Botão para enviar o formulário */}
        <Button variant="light" className="mt-4">Entrar</Button>
      </Container>
    </div>
  );
};

export default Login;
