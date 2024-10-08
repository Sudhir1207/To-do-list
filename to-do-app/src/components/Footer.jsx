import React from 'react';
import styles from "./footer.module.css";

const Footer = ({completedArray, totalToDos}) => {
  return (
    <div className={styles.footer}>
    <span className={styles.item}>Completed Tasks: {completedArray}</span>
    <span className={styles.item}>Total Tasks: {totalToDos}</span>

    </div>
  )
}

export default Footer;