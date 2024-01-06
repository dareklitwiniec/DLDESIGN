import React from "react";
import ContactForm from "../components/ContactForm";
import styles from './contact.module.css';

export const Contact = () => {
  return (
    <>
    <div className={styles.empty}>

    <div className={styles.contacta}>
    <ContactForm />

    </div>
    </div>
    </>

  );
};
