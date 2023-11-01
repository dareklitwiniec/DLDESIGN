import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  position: absolute;
  padding: 20px 55px;
  display: flex;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: white;
  z-index: 5;
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
  .logo {
    padding: 10px;
    height: 4em;
    margin: 5px;
    
    
  }
  img {
    height: 2em;
    &:hover {
      filter: brightness(0.85);
    }
    @media (max-width: 768px) {
      height: 1.4em;
      padding: 5px;
    }
  
    &:active {
      filter: brightness(1);
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="logo">
        <Link to="/" >
          <img src="/logo.svg" alt="Logo" />

        </Link>
        </div>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
