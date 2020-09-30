import React, {useRef} from 'react';
import { Container, FormContainer, Form, NameContainer } from '../../styles/pages/candidates/Register';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Header from '../../components/Header';

const Register: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const filiateRef = useRef<HTMLInputElement>(null);
  const campainRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  }
  return (
    <>
    <Header />
    <Container>
        <FormContainer>
          <h1>Primeiro, faça seu cadastro!</h1>
        <Form method="post">
          <NameContainer>
            <Input label="nome" ref={nameRef} name="name"/>
            <Input label="sobrenome" ref={lastnameRef} name="lastname"/>
          </NameContainer>
          <NameContainer>
            <Input label="partido" ref={filiateRef} name="filiate"/>
            <Input label="número de campanha" ref={campainRef} name="campain"/>
          </NameContainer>
          <Select name="functions" label="cargo" />
          <Input label="imagem de prefil" ref={avatarRef} name="avatar_url"/>
          <Input label="whatsapp" ref={whatsappRef} name="whatsapp"/>
          <Input label="biografia" ref={bioRef} name="bio"/>
          <button onClick={(e) => handleSubmit(e)}>Cadastrar</button>
        </Form>
        </FormContainer>
    </Container>
    </>
    );
  }

export default Register;
