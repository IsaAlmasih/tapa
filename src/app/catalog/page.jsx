import React from 'react'

import styles from "./styles.module.css"
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="products">Товары</Link>
      <div className={styles.gritWrapper}>
        <div className={styles.one}>Блок 1</div>
        <div className={styles.two}>Блок 2</div>
        <div className={styles.three}>Блок 3</div>
        <div className={styles.four}>Блок 4</div>
      </div>
    </div>
  );
}

export default page