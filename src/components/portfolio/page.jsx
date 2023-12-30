import React from "react";
import styles from './page.module.css';
// import Link from "next/link"
import { Link } from "react-router-dom";


import Button from "../../components/Button/Button";
// import Image from "next/image";
import { items } from "./data.js";
// import { notFound } from "next/navigation";


// export const Portfolio = () => {
  
  const getData = (cat) => {
    const data = items[cat];
  
    if (data) {
      return data;
    }
  
    // return notFound();
  };
  
  const Category = ({ params }) => {
    const data = getData(params.category);
    return (
      <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
  
        {data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                fill={true}
                src={item.image}
                alt=""
                width={300}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Category;
  


