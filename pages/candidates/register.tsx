import React from 'react';

import { Container, FormContainer, Form, NameContainer } from '../../styles/pages/candidates/Register';
import Input from '../../components/Input/Input';

const Register: React.FC = () => {
  return (
    <Container>
        <FormContainer>
          <h1>Primeiro, faça seu cadastro!</h1>
        <Form>
          <NameContainer>
          <Input/>
          <Input/>
          </NameContainer>
          <Input/>
          <Input/>
          <button>Cadastrar</button>
        </Form>
        </FormContainer>
    </Container>
    );
}

export default Register;