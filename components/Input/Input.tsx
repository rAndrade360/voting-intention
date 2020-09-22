import React from 'react';

import { Container } from './styles';

interface InputProps{
    label: string;
    name: string
}

const Input: React.FC<InputProps> = ({label, name}) => {
  return (
  <Container>
      <label htmlFor={name}>{label}</label><br/>
      <input name={name} id={name} />
  </Container>);
}

export default Input;