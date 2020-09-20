import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
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
  height: 90vh;
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

export const Form = styled.form`
  max-width: 700px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
