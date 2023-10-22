import React from 'react'
import styles from "./page.module.css";
import Button from '@/components/Button/Button';
import Image from 'next/image';

 const Category = ({params}) => {

  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Opis</p>
          <Button text={"See more.."} url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          fill={true}
          src={"https://images.pexels.com/photos/18282058/pexels-photo-18282058/free-photo-of-natura-zwierzeta-fotografia-zwierzecia-surykatka.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
          alt='opis'
          
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Opis</p>
          <Button text={"See more.."} url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          fill={true}
          src={"https://images.pexels.com/photos/18282058/pexels-photo-18282058/free-photo-of-natura-zwierzeta-fotografia-zwierzecia-surykatka.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
          alt='opis'
          
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Opis</p>
          <Button text={"See more.."} url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          fill={true}
          src={"https://images.pexels.com/photos/18282058/pexels-photo-18282058/free-photo-of-natura-zwierzeta-fotografia-zwierzecia-surykatka.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
          alt='opis'
          
          />
        </div>
      </div>
    </div>
  )
}

export default Category;
