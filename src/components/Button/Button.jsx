import React from "react";
import styles from "./button.module.css";
// import Link from "next/link";
import { Link } from "react-router-dom";


// export const Button = ({ text, url }) =>
export const Button = () => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};


