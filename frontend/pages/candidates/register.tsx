import React, {useRef} from 'react';
import { Container, FormContainer, Form, NameContainer } from '../../styles/pages/candidates/Register';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Header from '../../components/Header';
import { FormHandles, SubmitHandler } from '@unform/core';
import api from '../../services/api';

interface FormData {
  name: string,
  lastname: string,
  filiate: string,
  campain: string,
  cargo: string,
  avatar_url: string,
  whatsapp: string,
  bio: string,
}

const options =[
  {value: 'prefeito', label: 'Prefeito'},
  {value: 'vereador', label: 'Vereador'},

]

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async (data: object) => {
    try {
      await api.post('/CreateCandidate', data);
      alert('Registrado com sucesso!');
      formRef.current.reset();
    }catch(error) {
      alert('Ocorreu um erro!' + error);
    }    
  }
  return (
    <>
    <Header />
    <Container>
        <FormContainer>
          <h1>Primeiro, faça seu cadastro!</h1>
        <Form onSubmit={handleSubmit} ref={formRef} method="post">
          <NameContainer>
            <Input label="nome" name="name"/>
            <Input label="sobrenome" name="lastname"/>
          </NameContainer>
          <NameContainer>
            <Input label="partido" name="filiate"/>
            <Input label="número de campanha" name="campain"/>
          </NameContainer>
          <Select name="functions" label="cargo" options={options} />
          <Input label="imagem de prefil" name="avatar_url"/>
          <Input label="whatsapp"  name="whatsapp"/>
          <Input label="biografia" multiline name="bio"/>
          <button type="submit">Cadastrar</button>
        </Form>
        </FormContainer>
    </Container>
    </>
    );
  }

export default Register;
