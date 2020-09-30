import React from 'react';
import Header from '../../components/Header';

import { Container } from '../../styles/pages/voters/ListCandidates';

const Candidates: React.FC = () => {
  return (
      <>
  <Header />
  <Container>
      <h1>Candidatos à prefeito</h1>
  </Container>
  </>
    );
}

export default Candidates;
