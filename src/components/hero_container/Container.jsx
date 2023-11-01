import React from "react";
import styles from "./Container.css";

const Container = () => {
  return (
    <div className="hero-cont">
      <div className="block">
        <div className="grafika first">
          <div className="Hero_title">
            <span>WWW</span>
            <div className="Title_image1"></div>
          </div>
        </div>
        <div className="grafika second">
          <div className="Hero_title">
            <span>Grafika</span>
            <div className="Title_image2"></div>
          </div>
        </div>
        <div className="grafika third">
          <div className="Hero_title">
            <span className="col1">E-commers</span>
            <div className="Title_image3"></div>
          </div>
        </div>
        <div className="grafika fourth">
          <div className="Hero_title">
            <span>Identyfikacja</span>
            <div className="Title_image4"></div>
          </div>
        </div>
        <div className="grafika fifth">
          <div className="Hero_title">
            <span className="col1">Fotografia</span>
            <div className="Title_image5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
