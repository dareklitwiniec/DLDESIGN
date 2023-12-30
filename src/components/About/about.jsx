import React from "react";
import styles from './page.module.css';

import { Link } from "react-router-dom";


export const About = () => {
  return (
    <>
    <div className={styles.selectTitle} >Choose a gallery</div>
    <div className={styles.boxe} >
      <div className={styles.items}>
        <Link href="/gallery" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/gallery" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/gallery" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
        
      </div>
  </div>
    </>
  )
};

