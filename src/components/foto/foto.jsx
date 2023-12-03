
import React from "react";

import "./foto.css";

import ImageGallery from "react-image-grid-gallery";



const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/fotogra/Foma.jpg",
    },
    {
        alt: "Image2's alt text",

        src: "/fotogra/tomatos.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/fotogra/apple1.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/fotogra/kalaf.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/fotogra/Krasna.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/fotogra/Liczy2.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/fotogra/Plik.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/fotogra/Setki.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/fotogra/redboo_1000.jpg",
    },
    
    

];

export const Foto = () => {
    return (
        <div className="wrape">
        <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} />;

        </div>
        )
    }

  




