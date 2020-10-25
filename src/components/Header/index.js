import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="uploadImages" activeClassName="active">
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink to="globe" activeClassName="active">
              Globo
            </NavLink>
          </li>
          <li>
            <NavLink to="graphs" activeClassName="active">
              Gráficos
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
