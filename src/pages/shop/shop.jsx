import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import HeroOver from "../../components/hero_section/HeroOver";
// import Footer from "./components/footer/Footer";

import Container from "../../components/hero_container/Container";

import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <HeroOver />
      <Container />
      {/* <Footer /> */}
      
    </div>
  );
};
