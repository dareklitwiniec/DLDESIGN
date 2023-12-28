import React from "react";
import styles from './page.module.css';
// import Link from "next/link"
import { Link } from "react-router-dom";


export const Portfolio = () => {
return (
  <div className={styles.container} >
    <h1 className={styles.selectTitle} >Choose a gallery</h1>
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
  )
}


