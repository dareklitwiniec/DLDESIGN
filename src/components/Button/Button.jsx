import React from "react";
import styles from "./button.module.css";
// import Link from "next/link";
import { Link } from "react-router-dom";
const today = new Date();


// export const Button = ({ text, url }) =>

export default function Button(){
  return (
    <div class="">
        &copy; {today.getFullYear()} DLDESIGN
        </div>
  );
  }

 



