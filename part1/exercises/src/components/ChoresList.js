import React from 'react';
import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div className={styles.choresText}>
   <p className={styles.choresHeading}>ChoresList</p>
   <ol className={styles.choresList}>
      <li>Cleaning</li>
      <li>Washing</li>
      <li>cooking</li>
   </ol></div>
   );
}