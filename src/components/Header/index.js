import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="uploadImages">
        <span>Galeria</span>
      </Link>
      <Link to="globe">
        <span>Globo</span>
      </Link>
      <Link to="graph">
        <span>Gráficos</span>
      </Link>
    </Container>
  );
}
