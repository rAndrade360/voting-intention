import styled from 'styled-components';
import {Form as Unform} from '@unform/web';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const NameContainer = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  &>h1{
    font-size: 1.5rem;
    margin: 1rem 2rem;
  }
  height: 100%;
  margin: 1rem;
  width: 50vw;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

`;

export const Form = styled(Unform)`
  max-width: 700px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    margin-top: 1rem;
    padding: .8rem;
    border: 0;
    background-color: ${props => props.theme.colors.secundary};
    color: #fff;
    border-radius: 7px;
    box-shadow: 2px 2px #3333;
    cursor: pointer;
    transition: .5s;
  }

  button:hover {
    opacity: .8;
  }
`;
