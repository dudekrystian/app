import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Blog = props => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
          src="https://images.pexels.com/photos/5490803/pexels-photo-5490803.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          width={400}
          height={250}
          className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desciption</p>
        </div>
      </Link>
      <Link href="/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
          src="https://images.pexels.com/photos/5490803/pexels-photo-5490803.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          width={400}
          height={250}
          className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desciption</p>
        </div>
      </Link>
    </div>
  )
}


export default Blog;