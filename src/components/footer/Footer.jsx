import styles from "./Footer.module.css";

const today = new Date();

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <div class="">
        &copy; {today.getFullYear()} DLDESIGN
        </div>
      </footer>
    </>
  );
}
