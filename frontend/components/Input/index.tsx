import React, { forwardRef, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({label, name, ...rest}, ref) => {
  return (
  <Container>
      <label htmlFor={name}>{label}</label><br/>
      <input name={name} {...rest} ref={ref} id={name} />
  </Container>);
}

export default forwardRef(Input);