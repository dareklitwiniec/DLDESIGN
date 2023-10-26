import React from "react";
import "./gallery.css";

import ImageGallery from "react-image-grid-gallery";



const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/images/001.jpg",
    },
    {
        alt: "Image2's alt text",

        src: "/images/002.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/003.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/004.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/005.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/006.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/007.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/008.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/009.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/010.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/011.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/012.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/013.jpg",
    },

    {
        alt: "Image3's alt text",

        src: "/images/014.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/015.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/016.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/017.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/images/018.jpg",
    },

];

export const Gallery = () => {
    return (
        <div className="wrape">
        <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} />;

        </div>
        )
    }

  