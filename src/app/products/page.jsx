import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.wrapper}>
      page
      <Link href={"catalog"}>Вернутся</Link>
    </div>
  );
}

export default page