import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

import {Container, MainContainer, Card, Description, Title, GridContainer, HeroImage} from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Voiting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Title>
          Bem vindo ao <span>Voting Intention!</span>
        </Title>
        <Description>
          Onde você pode exercer sua cidadania!
        </Description>
        <HeroImage src={require("../assets/image.png").default} />

        <GridContainer>
          <Link href="/candidates/register">
          <Card>
            <h3>Sou candidato! &rarr;</h3>
            <p>Entre para as estatísticas e veja seu progresso.</p>
          </Card>
          </Link>

          <Link href="/voters/candidates">
          <Card>
            <h3>Sou Eleitor! &rarr;</h3>
            <p>
              Conheça mais sobre os candidatos e exerça sua cidadania.
            </p>
          </Card>
          </Link>
        </GridContainer>
      </MainContainer>
    </Container>
  )
}

export default Home;
