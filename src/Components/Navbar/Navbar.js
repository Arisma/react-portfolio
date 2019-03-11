import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
     
      <Link to="/">
        <div className="text-bright nav-link"> 
          <span className="mr-2">
              <i className="fas fa-home"> Home</i>
          </span>
        </div>
      </Link>

      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus " />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </Nav>
    )
  }
}
const Nav = styled.nav`
  background: #404040;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  .nav-link:hover {
    color: var(--mainRed) !important;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--mainRed);
  border: 0.05rem solid var(--mainWhite);
  color: var(--mainWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightRed);
    background: ${props =>
      props.cart ? "var(--mainRed)" : "var(--lightRed)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
