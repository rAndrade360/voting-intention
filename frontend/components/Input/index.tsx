import React, { useEffect, useRef  } from 'react';

import { useField } from '@unform/core';


import { Container } from './styles';

interface Props<T> {
    label?: string;
    name: string;
    multiline?: T;
}

type InputProps = JSX.IntrinsicElements['input'] & Props<false>;
type TextAreaProps = JSX.IntrinsicElements['textarea'] & Props<true>;

const Input: React.FC<InputProps | TextAreaProps> = ({label, name, multiline = false, ...rest}) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField]);

  const props = {
    ...rest,
    ref: inputRef,
    id: fieldName,
    name: fieldName,
    'aria-label': fieldName,
    defaultValue,
  };

  return (
  <Container>
      <label htmlFor={fieldName}>{label}</label><br/>
      {multiline?(
        <textarea {...props as TextAreaProps} />
      ) : (
        <input {...props as InputProps} />
      )
      }
  </Container>);
}

export default Input;
