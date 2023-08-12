import React, { useContext, useState } from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  let cartCount = 0

  cartCtx.items.forEach(element => {
      cartCount += Number(element.quantity);
  })

  const clickStoreHandler = (event) => {
    event.preventDefault();
    props.onClickStore();
  };

  const cartClickHandler = (event) => {
    event.preventDefault();
    props.onClickCart();
  };

  return (
    <Navbar className={classes.nav} bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/" className={classes.brand}>
          The Genrics
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="jds.com" onClick={clickStoreHandler}>
            Store
          </Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
        </Nav>
        <Button variant="outline-warning" onClick={cartClickHandler}>
          Cart {cartCount}
        </Button>{" "}
      </Container>
    </Navbar>
  );
};

export default Header;