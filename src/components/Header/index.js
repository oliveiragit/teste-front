import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector((state) =>
    state.cart.reduce((size, product) => {
      size += product.amount;
      return size;
    }, 0)
  );

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Brunoshoes" />
      </Link>
      <Cart to="cart">
        <div>
          <strong> Meu carrinho </strong>
          <span>{cartSize} items </span>
        </div>
        <MdShoppingBasket color="#FFF" size={36} />
      </Cart>
    </Container>
  );
}
