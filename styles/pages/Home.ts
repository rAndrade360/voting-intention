import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  padding: 2.5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 2rem;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-top: 1.2rem;
`;

export const Card = styled.div`
  margin: .7rem;
  flex-basis: 45%;
  padding: .8rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover {
    color: #0070f3;
    border-color: #0070f3;
    cursor: pointer;
  }
  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
  h3 {
    margin: 0 0 .6rem 0;
    font-size: 1.2rem;
  }
  &:first-child{
   
    background-color: ${props => props.theme.colors.text};
    border-color: #eaeaea;
    color: #eaeaea;
  }
  &:first-child:hover {
    background-color: #0070f3;
    border-color: #0070f3;
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
  span {
    color: #0070f3;
    text-decoration: none;
  }
`;

export const Description = styled.p`
  line-height: 1.5;
  font-size: 1.2rem;
  text-align: center;
`;