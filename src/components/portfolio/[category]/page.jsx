import React from "react";
import styles from './page.module.css';
// import Image from 'next/image';
// import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const Category = ({params}) => {
  console.log(params);
  return (
  <div className={styles.container}>
    <h1 className={styles.catTitle}>{params.category}</h1>
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae. Reiciendis, modi ipsam. Quasi, recusandae ipsum! Similique numquam aut repellendus blanditiis nostrum minima qui nihil ipsam corrupti, perspiciatis doloribus iure?</p>
        {/* <Button text={"See More"} url="#"/> */}
        </div> 
      <div className={styles.imgContainer}>
        <img width="100" height="50"
        className={styles.img}
        fill={true} src="https://res.cloudinary.com/dacosbo9t/image/upload/v1691429237/samples/ecommerce/leather-bag-gray.jpg"  alt=''
            />
        </div> 

    </div>
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        {/* <Button text={"See More"} url="#"/> */}
        </div> 
      <div className={styles.imgContainer}>
        <img width="100" height="50"
        className={styles.img}
        fill={true} src="https://res.cloudinary.com/dacosbo9t/image/upload/v1691429237/samples/ecommerce/leather-bag-gray.jpg"  alt=''
            />
        </div> 

    </div>
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        {/* <Button text={"See More"} url="#"/> */}
        </div> 
      <div className={styles.imgContainer}>
        <img width="100" height="50"
        className={styles.img}
        fill={true} src="https://res.cloudinary.com/dacosbo9t/image/upload/v1691429237/samples/ecommerce/leather-bag-gray.jpg"  alt=''
            />
        </div> 
        <div className={styles.items}>
      <Link href="https://res.cloudinary.com/dacosbo9t/image/upload/v1699124773/samples/woman-on-a-football-field.jpg" className={styles.item}>
        <span className={styles.title}>Illustrations</span>
      </Link>
      <Link href="https://res.cloudinary.com/dacosbo9t/image/upload/v1699124773/samples/woman-on-a-football-field.jpg" className={styles.item}>
        <span className={styles.title}>Websites</span>
      </Link>
      <Link href="https://res.cloudinary.com/dacosbo9t/image/upload/v1699124773/samples/woman-on-a-football-field.jpg" className={styles.item}>
        <span className={styles.title}>Application</span>
      </Link>
      
    </div>

    </div>
  </div>
  )
}


