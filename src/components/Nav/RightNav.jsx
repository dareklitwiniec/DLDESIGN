import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  
  
 
  li {
    padding: 18px 20px;
    color: #fff;
    font-weight: 300;
    text-transform: uppercase;
    
    &:hover {
      // filter: brightness(0.45);
      color: #fff;
      text-shadow: 2px 0px 19px black;
      font-weight: 700;

    }
    
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #646464cf;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    
    
  }
`;
const linkStyle = {
  
  textDecoration: "none",
  textShadow: "2px 0px 19px rgba(249, 249, 251, 1)",
  
  
  
};

const RightNav = ({ open }) => {
  return (
    <Ul open={open} >
      
      <Link to="/" style={linkStyle}><li >Home</li></Link>
      <Link to="/about" style={linkStyle}> <li >About</li></Link>
      <Link to="/contact"style={linkStyle}><li>Contact</li></Link>
      <Link to="/gallery"style={linkStyle}><li>Gallery</li></Link>
      <Link to="/gallery"style={linkStyle}><li></li></Link>
      <li></li>
    
      
    </Ul>
  );
};

export default RightNav;
