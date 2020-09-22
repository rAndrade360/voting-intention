import React from 'react';
import Link from 'next/link';


import { Container, HomeLink } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <nav>
        <p>Vote Intention</p>
        <Link href="/">
        <HomeLink>
            <p>Voltar para home</p>
        </HomeLink>
        </Link>
        </nav>
    </Container>
    );
}

export default Header;