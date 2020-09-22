import React from 'react';

import { Container, FormContainer, Form, NameContainer } from '../../styles/pages/candidates/Register';
import Input from '../../components/Input/Input';

const Register: React.FC = () => {
  return (
    <Container>
        <FormContainer>
          <h1>Primeiro, faça seu cadastro!</h1>
        <Form method="post">
          <NameContainer>
          <Input label="nome" name="name"/>
          <Input label="sobrenome" name="lastname"/>
          </NameContainer>
          <NameContainer>
          <Input label="partido" name="filiate"/>
          <Input label="número de campanha" name="campain"/>
          </NameContainer>
          <Input label="imagem de prefil" name="avatar_url"/>
          <Input label="whatsapp" name="whatsapp"/>
          <Input label="biografia" name="bio"/>
          <button>Cadastrar</button>
        </Form>
        </FormContainer>
    </Container>
    );
}

export default Register;