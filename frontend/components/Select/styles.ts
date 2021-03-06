import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: .9rem;
  padding: .3rem;
  margin: .2rem;

`;

export const SelectContainer = styled(ReactSelect)`
  /* width: 100%;
  height: 42px;
  padding: .5rem;
  background-color: #37373744;
  border: 0;
  border-radius: 10px;
  -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
   /* -moz-appearance: none; Remove estilo padrão do FireFox */
   /* appearance: none; Remove estilo padrão do FireFox */ 
   & .Select__indicator Select__dropdown-indicator {
    border-color: transparent transparent red;
  }
`;
