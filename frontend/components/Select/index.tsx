import React, {useRef, useEffect} from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';

import { useField } from '@unform/core';
import { SelectContainer, Container } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
}

// interface SelectProps{
//     label: string;
//     name: string
// }

const Select: React.FC<Props> = ({label, name, ...rest}) => {

  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });

  }, [fieldName, registerField, rest.isMulti]);

  return (
      <Container>
    <label htmlFor={name}>{label}</label>
    <ReactSelect
      id={name} 
      name={name}
      ref={selectRef}
      {...rest}
      classNamePrefix={'Select'}
     />
    </Container>
    );
}

export default Select;