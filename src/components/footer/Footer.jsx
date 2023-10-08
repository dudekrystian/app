"use client"

import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
  console.log('footer is server side rendering?')
  return (
    <div className={styles.container}>
        <div>
            @2023
        </div>
        <div className={styles.social}>
          <Image className={styles.icon} src="/1.png"  width={15} height={15} alt="facebook" />
          <Image className={styles.icon} src="/2.png"   width={15} height={15} alt="instagram" />
          <Image className={styles.icon} src="/3.png"   width={15} height={15} alt="x" />
          <Image className={styles.icon} src="/4.png"   width={15} height={15} alt="youtube" />

        </div>
    </div>
  )
}

export default Footer;