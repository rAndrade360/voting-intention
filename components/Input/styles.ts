import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: .3rem;
  margin: .2rem;
  width: 100%;

  input {
      width: 100%;
      font-size: 1rem;
      padding: .8rem;
      color: #382766ff;
      border: 0;
      background-color: #eaeaea;
      border-radius: 7px;
  }
  label {
      font-size: .9rem;
  }
`;
