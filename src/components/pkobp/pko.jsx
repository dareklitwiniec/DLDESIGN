
import React from "react";

import "./pko.css";

import ImageGallery from "react-image-grid-gallery";



const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/images/pko_01.jpg",
    },
    {
        alt: "Image2's alt text",

        src: "/images/pko_02.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/pko_03.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/pko_04.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/pko_05.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/pko_06.jpg",
    },
    
    

];

export const Pko = () => {
    return (
        <div className="wrape">
        <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} />;

        </div>
        )
    }

  




