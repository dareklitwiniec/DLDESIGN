import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

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
  .logo {
    padding: 20px;
    height: 4em;
    margin: 5px;
  }
  img {
    height: 2em;
    &:hover {
      filter: brightness(0.85);
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
          <img src="/logo.svg" alt="Logo" />
        </div>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
