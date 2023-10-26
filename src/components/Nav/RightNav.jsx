import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  Link {
    text-decoration: none;
  }
  li {
    padding: 18px 20px;
    color: #fff;
    font-weight: 300;
    text-transform: uppercase;
    &:hover {
      filter: brightness(0.45);
    }
    
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #64646469;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
    
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"> <li>About</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/gallery"><li>Gallery</li></Link>
      <li></li>
    
      
    </Ul>
  );
};

export default RightNav;
