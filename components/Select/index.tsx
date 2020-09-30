import React from 'react';

import { SelectContainer, Container } from './styles';

interface SelectProps{
    label: string;
    name: string
}

const Select: React.FC<SelectProps> = ({label, name}) => {
  return (
      <Container>
    <label htmlFor={name}>{label}</label>
    <SelectContainer id={name}  name={name}>
      <option>Prefeito</option>
      <option>Vereador</option>
    </SelectContainer>
    </Container>
    );
}

export default Select;